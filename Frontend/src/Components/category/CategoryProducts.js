import React, { useState, useEffect, useContext } from "react";
import "./CategoryProducts.css";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider";

const CategoryProducts = () => {
    const { id } = useParams();
    const history = useHistory();

    const { setAccount } = useContext(Logincontext);

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setPage(1);
        setSelectedBrands([]);
        fetchBrands();
    }, [id]);

    useEffect(() => {
        fetchProducts();
    }, [id, page, selectedBrands]);

    const fetchBrands = async () => {
        try {
            const res = await fetch(
                `/api/products/brands?category=${encodeURIComponent(id)}`
            );

            const data = await res.json();
            setBrands(data.brands || []);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchProducts = async () => {
        try {
            const brandQuery = selectedBrands.join(",");

            const res = await fetch(
                `/api/products?category=${encodeURIComponent(
                    id
                )}&page=${page}&limit=12&brands=${brandQuery}`
            );

            const data = await res.json();

            setProducts(data.products || []);
            setTotalPages(data.totalPages || 1);
        } catch (error) {
            console.error(error);
        }
    };

    const toggleBrand = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(
                selectedBrands.filter((b) => b !== brand)
            );
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }

        setPage(1);
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
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(
                    data.message ||
                    data.error ||
                    "Failed to add to cart"
                );
                return;
            }

            // Refresh logged-in user
            const profileRes = await fetch(
                "/api/users/profile",
                {
                    credentials: "include",
                }
            );

            if (profileRes.ok) {
                const updatedUser =
                    await profileRes.json();

                setAccount(updatedUser);

                localStorage.setItem(
                    "user",
                    JSON.stringify(updatedUser)
                );
            }

            toast.success(
                data.message ||
                "Added to cart successfully"
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Failed to add product to cart."
            );
        }
    };

    return (
        <div className="category-page-container">
            {/* Left Sidebar */}
            <div className="filter-sidebar">
                <h2>Brands</h2>
                <hr className="brand-divider" />

                {brands.map((brand) => (
                    <label
                        key={brand}
                        className="brand-option"
                    >
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(
                                brand
                            )}
                            onChange={() =>
                                toggleBrand(brand)
                            }
                        />

                        {brand}
                    </label>
                ))}
            </div>

            {/* Products */}
            <div className="products-container">
                <div className="category-header">
                    <p className="category-breadcrumb">
                        <span className="breadcrumb-label">Category</span>
                        {" > > "}
                        <span className="breadcrumb-value">
                            {decodeURIComponent(id)}
                        </span>
                    </p>

                    <h2 className="results-title">
                        {products.length} Products Found
                    </h2>
                </div>

                <div className="products-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div
                                className="product-card"
                                key={product._id}
                                onClick={() =>
                                    history.push(
                                        `/products/${product._id}`
                                    )
                                }
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    src={
                                        product.images?.[0]
                                    }
                                    alt={
                                        product.name
                                    }
                                    className="product-image"
                                />

                                <div className="product-brand">
                                    {product.brand}
                                </div>

                                <h3 className="product-name">
                                    {product.name}
                                </h3>

                                <p className="product-description">
                                    {
                                        product.description
                                    }
                                </p>

                                <div className="rating">
                                    ⭐{" "}
                                    {
                                        product.averageRating
                                    }{" "}
                                    (
                                    {
                                        product.totalReviews
                                    }
                                    )
                                </div>

                                <div className="price-row">
                                    <span className="cost">
                                        ₹
                                        {product.price.cost.toFixed(
                                            2
                                        )}
                                    </span>

                                    <span className="mrp">
                                        ₹
                                        {product.price.mrp.toFixed(
                                            2
                                        )}
                                    </span>

                                    <span className="discount">
                                        (
                                        {
                                            product.price
                                                .discount
                                        }
                                        % off)
                                    </span>
                                </div>

                                <div className="stock">
                                    {product.stock >
                                        0
                                        ? `${product.stock} in stock`
                                        : "Out of stock"}
                                </div>

                                <button
                                    className="cart-btn"
                                    onClick={async (
                                        e
                                    ) => {
                                        e.stopPropagation();
                                        await addToCart(
                                            product._id
                                        );
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <h3>
                            No products found.
                        </h3>
                    )}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button
                        disabled={page === 1}
                        onClick={() =>
                            setPage(page - 1)
                        }
                    >
                        Previous
                    </button>

                    <span>
                        Page {page} of{" "}
                        {totalPages}
                    </span>

                    <button
                        disabled={
                            page === totalPages
                        }
                        onClick={() =>
                            setPage(page + 1)
                        }
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts;