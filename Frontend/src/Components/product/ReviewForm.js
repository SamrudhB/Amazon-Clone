import React, { useState } from "react";
import "./reviewform.css";

const ReviewForm = ({ productId,
    refreshReviews }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    const submitReview = async (e) => {
        e.preventDefault();

        if (!comment.trim()) {
            alert("Please write a review.");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    productId,
                    rating,
                    comment,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(
                    data.message ||
                    data.error ||
                    "Failed to submit review."
                );
                return;
            }

            alert("Review submitted successfully!");

            setComment("");
            setRating(5);

            // Refresh reviews immediately
            if (refreshReviews) {
                await refreshReviews();
            }

        } catch (err) {
            console.error(err);
            alert("Failed to submit review.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="review-form-card">
            <h2>Review this product</h2>
            <p className="review-subtitle">
                Share your thoughts with other customers
            </p>

            <form onSubmit={submitReview}>
                <label className="review-label">Rating</label>

                <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="review-select"
                >
                    <option value={5}>★★★★★ (5)</option>
                    <option value={4}>★★★★☆ (4)</option>
                    <option value={3}>★★★☆☆ (3)</option>
                    <option value={2}>★★☆☆☆ (2)</option>
                    <option value={1}>★☆☆☆☆ (1)</option>
                </select>

                <textarea
                    className="review-textarea"
                    placeholder="Write your review..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={5}
                />

                <button
                    type="submit"
                    className="review-submit-btn"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Review"}
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;