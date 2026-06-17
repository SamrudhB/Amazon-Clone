import React, { useState } from "react";
import "./Addproduct.css";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        brand: "",
        mrp: "",
        cost: "",
        discount: "",
        stock: "",
        images: [""],
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (index, value) => {
        const updatedImages = [...formData.images];
        updatedImages[index] = value;

        setFormData((prev) => ({
            ...prev,
            images: updatedImages,
        }));
    };

    const addImageField = () => {
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ""],
        }));
    };

    const removeImageField = (index) => {
        const updatedImages = formData.images.filter((_, i) => i !== index);

        setFormData((prev) => ({
            ...prev,
            images: updatedImages.length ? updatedImages : [""],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            description: formData.description,
            category: formData.category,
            brand: formData.brand,
            images: formData.images.filter((img) => img.trim() !== ""),
            price: {
                mrp: Number(formData.mrp),
                cost: Number(formData.cost),
                discount: Number(formData.discount),
            },
            stock: Number(formData.stock),
        };

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                alert("Failed to add product");
                return;
            }

            alert("Product added successfully!");

            setFormData({
                name: "",
                description: "",
                category: "",
                brand: "",
                mrp: "",
                cost: "",
                discount: "",
                stock: "",
                images: [""],
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <div className="add-product-page">
            <div className="add-product-card">
                <h2>Add New Product</h2>

                <form onSubmit={handleSubmit}>
                    <label>Product Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Description</label>
                    <textarea
                        rows="4"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <div className="row">
                        <div>
                            <label>Category</label>
                            <input
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Brand</label>
                            <input
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <label>MRP</label>
                            <input
                                type="number"
                                name="mrp"
                                value={formData.mrp}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Selling Price</label>
                            <input
                                type="number"
                                name="cost"
                                value={formData.cost}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <label>Discount (%)</label>
                            <input
                                type="number"
                                name="discount"
                                value={formData.discount}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Stock</label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <label>Image URLs</label>

                    {formData.images.map((image, index) => (
                        <div className="image-row" key={index}>
                            <input
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                value={image}
                                onChange={(e) =>
                                    handleImageChange(index, e.target.value)
                                }
                            />

                            {formData.images.length > 1 && (
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() => removeImageField(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}

                    <button
                        type="button"
                        className="add-image-btn"
                        onClick={addImageField}
                    >
                        + Add Image URL
                    </button>

                    <button type="submit" className="submit-btn">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;