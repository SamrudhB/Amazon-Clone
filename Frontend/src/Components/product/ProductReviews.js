import React, { useState } from "react";
import "../product/product-reviews.css";
import ReviewForm from "./ReviewForm";

const ProductReviews = ({ reviews, productId }) => {

    console.log({ reviews });
    const averageRating =
        reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;

    const getCount = (star) =>
        reviews.filter((item) => item.rating === star).length;

    return (
        <div className="reviews-container">
            <div className="reviews-summary">
                <h2>Customer Reviews</h2>

                <div className="average-rating">
                    ⭐ {averageRating.toFixed(1)} out of 5
                </div>

                <p>{reviews.length} global ratings</p>

                {[5, 4, 3, 2, 1].map((star) => {
                    const count = getCount(star);
                    const percentage = (count / reviews.length) * 100;

                    return (
                        <div key={star} className="rating-row">
                            <span>{star} star</span>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>

                            <span>{Math.round(percentage)}%</span>
                        </div>
                    );
                })}
                <ReviewForm productId={productId} />
            </div>

            <div className="reviews-list">
                <h2>Top Reviews</h2>

                {reviews.map((review) => (
                    <div className="review-card" key={review._id}>
                        <div className="review-user">
                            <div className="avatar">
                                {review.user.fname.charAt(0)}
                            </div>

                            <span>{review.user.fname}</span>
                        </div>

                        <div className="review-rating">
                            {"⭐".repeat(review.rating)}
                        </div>

                        <div className="review-date">
                            Reviewed on{" "}
                            {new Date(review.createdAt).toLocaleDateString()}
                        </div>

                        <p className="review-comment">{review.comment}</p>

                        <button className="helpful-btn">
                            Helpful
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductReviews;