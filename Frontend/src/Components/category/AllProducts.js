import React, { useState, useEffect, useContext } from "react";
import "./AllProducts.css";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider"; // Adjust path if needed

const CategoryProducts = () => {
    const { id } = useParams();
    const history = useHistory();

    const { setAccount } = useContext(Logincontext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [id]);

    const fetchProducts = async () => {
        try {
            const search = id ? id : "";

            const res = await fetch(`/api/products/search?q=${search}`);
            const data = await res.json();

            setProducts(data || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addToCart = async (productId) => {
        try {
            const res = await fetch("/api/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    productId,
                    quantity: 1,
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
                return;
            }

            // Refresh user profile so navbar cart count updates
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

            toast.success(
                data.message || "Added to cart successfully",
                {
                    position: "top-center",
                }
            );
        } catch (error) {
            console.error(error);

            toast.error("Failed to add product to cart.", {
                position: "top-center",
            });
        }
    };

    const openProduct = (id) => {
        history.push(`/products/${id}`);
    };

    return (
        <div className="category-page">
            <h2 className="results-titleall">Results</h2>

            <p className="results-subtitle">
                All Products available in this category
            </p>

            <div className="products-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            className="product-card"
                            key={product._id}
                            onClick={() => openProduct(product._id)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={product.images?.[0]}
                                alt={product.name}
                                className="product-image"
                            />

                            <div className="product-brand">
                                {product.brand}
                            </div>

                            <h3 className="product-name">
                                {product.name}
                            </h3>

                            <p className="product-description">
                                {product.description}
                            </p>

                            <div className="rating">
                                ⭐ {product.averageRating} (
                                {product.totalReviews})
                            </div>

                            <div className="price-row">
                                <span className="cost">
                                    ₹{product.price.cost.toFixed(2)}
                                </span>

                                <span className="mrp">
                                    ₹{product.price.mrp.toFixed(2)}
                                </span>

                                <span className="discount">
                                    ({product.price.discount}% off)
                                </span>
                            </div>

                            <div className="stock">
                                {product.stock > 0
                                    ? `${product.stock} in stock`
                                    : "Out of stock"}
                            </div>

                            <button
                                className="cart-btn"
                                onClick={async (e) => {
                                    e.stopPropagation();
                                    await addToCart(product._id);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <h3>No products found.</h3>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;