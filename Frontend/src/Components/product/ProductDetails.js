import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import "../product/product.css";
import ProductReviews from "./ProductReviews";
import { Logincontext } from "../context/Contextprovider";

const AmazonProductPage = () => {
  const history = useHistory();
  const { id } = useParams();

  const { setAccount } = useContext(Logincontext);

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[cursorX, cursorY], setCursorXY] = useState([0, 0]);
  const [[lensX, lensY], setLensXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setImgSize] = useState([0, 0]);

  const ZOOM_LEVEL = 2.5;
  const LENS_SIZE = 150;

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews/${id}`);
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async () => {
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          productId: id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(
          data.message || data.error || "Failed to add to cart",
          {
            position: "top-center",
          }
        );
        history.push("/login");
        return;
      }

      const profileRes = await fetch("/api/users/profile", {
        method: "GET",
        credentials: "include",
      });

      if (profileRes.ok) {
        const updatedUser = await profileRes.json();

        setAccount(updatedUser);
        localStorage.setItem(
          "user",
          JSON.stringify(updatedUser)
        );
      }

      toast.success("Added to cart successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  const handleMouseEnter = (e) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    setImgSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();

    let x = e.pageX - left - window.pageXOffset;
    let y = e.pageY - top - window.pageYOffset;

    let cleanLensX = x - LENS_SIZE / 2;
    let cleanLensY = y - LENS_SIZE / 2;

    if (cleanLensX < 0) cleanLensX = 0;
    if (cleanLensX > width - LENS_SIZE) cleanLensX = width - LENS_SIZE;
    if (cleanLensY < 0) cleanLensY = 0;
    if (cleanLensY > height - LENS_SIZE) cleanLensY = height - LENS_SIZE;

    setCursorXY([x, y]);
    setLensXY([cleanLensX, cleanLensY]);
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const savedPercent = Math.round(product.price.discount);
  const ratingText = product.averageRating.toFixed(1);
  const stockText =
    product.stock > 0 ? "In stock" : "Out of stock";

  const deliveryDay = "Tomorrow";
  const deliveryDate = "14 June";
  const deliveryLocation = "Bengaluru 562130";

  return (
    <>
      <div className="amazon-page">
        <main className="amazon-main">
          {/* PRODUCT GALLERY */}
          <div className="product-gallery" style={{ position: "relative" }}>
            <div
              className="image-card"
              style={{ position: "relative", overflow: "hidden", cursor: "crosshair" }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowMagnifier(false)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                style={{ width: "100%", display: "block" }}
              />

              {/* Shaded Lens Box Overlay tracking cursor */}
              {showMagnifier && (
                <div
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
                    height: `${LENS_SIZE}px`,
                    width: `${LENS_SIZE}px`,
                    backgroundColor: "rgba(247, 161, 32, 0.23)",
                    border: "1px solid #f7a120",
                    top: `${lensY}px`,
                    left: `${lensX}px`,
                  }}
                />
              )}
            </div>

            <p className="image-note">
              Hover image to zoom / Click for full view
            </p>

            {showMagnifier && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "105%",
                  width: `${imgWidth}px`,
                  height: `${imgHeight}px`,
                  zIndex: 99,
                  border: "1px solid #d4d4d4",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                  backgroundColor: "#fff",
                  backgroundImage: `url('${product.images[0]}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${imgWidth * ZOOM_LEVEL}px ${imgHeight * ZOOM_LEVEL}px`,
                  // Translates lens coordinates inversely into high-res scaling placement
                  backgroundPositionX: `${-lensX * ZOOM_LEVEL}px`,
                  backgroundPositionY: `${-lensY * ZOOM_LEVEL}px`
                }}
              />
            )}
          </div>

          <div className="product-info">
            <p className="breadcrumbs">
              Beauty &gt; Bath &amp; Body &gt; Cleansers &gt;
              Solid Soap Bars
            </p>

            <h1 className="product-title">
              {product.name}
            </h1>

            <div className="rating-row">
              <span className="rating-badge">
                {ratingText} ★
              </span>

              <span className="review-count">
                {product.totalReviews} ratings
              </span>
            </div>

            <p className="product-description">
              {product.description}
            </p>

            <div className="price-row">
              <span className="sale-price">
                ₹{product.price.cost.toFixed(2)}
              </span>

              <span className="mrp">
                M.R.P. ₹{product.price.mrp.toFixed(2)}
              </span>

              <span className="discount">
                Save {savedPercent}%
              </span>
            </div>

            <div className="product-meta">
              <div>
                <strong>Brand:</strong> {product.brand}
              </div>

              <div>
                <strong>Category:</strong>{" "}
                {product.category}
              </div>

              <div>
                <strong>Stock:</strong> {product.stock}
              </div>
            </div>

            <div className="delivery-box">
              <div className="delivery-line">
                FREE delivery{" "}
                <strong>
                  {deliveryDay}, {deliveryDate}
                </strong>
              </div>

              <div className="delivery-line">
                Deliver to {deliveryLocation}
              </div>
            </div>
          </div>

          <aside className="buy-box">
            <div className="buy-price">
              ₹{product.price.cost.toFixed(2)}
            </div>

            <div className="buy-tax">
              Inclusive of all taxes
            </div>

            <div className="availability">
              {stockText}
            </div>

            <button
              className="btn cart-btn"
              onClick={addToCart}
            >
              Add to Cart
            </button>

            <button className="btn buy-btn">
              Buy Now
            </button>

            <div className="secure-note">
              Secure transaction
            </div>
          </aside>
        </main>
      </div>

      <ProductReviews
        reviews={reviews}
        productId={id}
        refreshReviews={fetchReviews}
      />
    </>
  );
};

export default AmazonProductPage;
