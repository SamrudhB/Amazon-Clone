import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "../product/product.css";
import ProductReviews from "./ProductReviews";

const AmazonProductPage = () => {
  // const [product] = useState(defaultProduct);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  const fetchReviews = async () => {
    const res = await fetch(`/api/reviews/${id}`);
    const data = await res.json();
    setReviews(data);
  };

  const addToCart = async () => {
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ productId: id }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || data.error || "Failed to add to cart", {
          position: "top-center",
        });
        return;
      }

      toast.success(data.message || "Added to cart successfully", {
        position: "top-center",
      });

    } catch (error) {
      console.error("Add to cart error:", error);

      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const savedPercent = Math.round(product.price.discount);
  const ratingText = product.averageRating.toFixed(1);
  const stockText = product.stock > 0 ? "In stock" : "Out of stock";
  const deliveryDay = "Tomorrow";
  const deliveryDate = "14 June";
  const deliveryLocation = "Bengaluru 562130";

  return (
    <>
      <div className="amazon-page">
        <main className="amazon-main">
          <div className="product-gallery">
            <div className="image-card">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <p className="image-note">Click image to see full view</p>
          </div>

          <div className="product-info">
            <p className="breadcrumbs">
              Beauty &gt; Bath &amp; Body &gt; Cleansers &gt; Solid Soap Bars
            </p>

            <h1 className="product-title">{product.name}</h1>

            <div className="rating-row">
              <span className="rating-badge">{ratingText} ★</span>
              <span className="review-count">{product.totalReviews} ratings</span>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="price-row">
              <span className="sale-price">₹{product.price.cost.toFixed(2)}</span>
              <span className="mrp">M.R.P. ₹{product.price.mrp.toFixed(2)}</span>
              <span className="discount">Save {savedPercent}%</span>
            </div>

            <div className="product-meta">
              <div><strong>Brand:</strong> {product.brand}</div>
              <div><strong>Category:</strong> {product.category}</div>
              <div><strong>Stock:</strong> {product.stock}</div>
            </div>

            <div className="delivery-box">
              <div className="delivery-line">
                FREE delivery <strong>{deliveryDay}, {deliveryDate}</strong>
              </div>
              <div className="delivery-line">Deliver to {deliveryLocation}</div>
            </div>
          </div>

          <aside className="buy-box">
            <div className="buy-price">₹{product.price.cost.toFixed(2)}</div>
            <div className="buy-tax">Inclusive of all taxes</div>

            <div className="availability">{stockText}</div>

            <button className="btn cart-btn" onClick={addToCart}>Add to Cart</button>
            <button className="btn buy-btn">Buy Now</button>

            <div className="secure-note">Secure transaction</div>
          </aside>
        </main>
      </div>
      <ProductReviews reviews={reviews} productId={id} />
    </>
  );
};

export default AmazonProductPage;
