import React, {
    useState,
    useEffect,
    useContext,
} from "react";

import {
    useParams,
    useHistory,
} from "react-router-dom";

import "./OrderDetails.css";

import { Logincontext } from "../context/Contextprovider";

const statusSteps = [
    "Pending",
    "Confirmed",
    "Packed",
    "Shipped",
    "Out For Delivery",
    "Delivered",
];

const OrderDetails = () => {

    const { id } = useParams();

    const history = useHistory();

    const { account, setAccount } =
        useContext(Logincontext);

    const [order, setOrder] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        fetchOrder();
    }, []);

    const fetchOrder = async () => {

        try {

            const res = await fetch(
                `/api/orders/${id}`,
                {
                    credentials: "include",
                }
            );

            const data =
                await res.json();

            setOrder(data);

            setLoading(false);

        } catch (err) {

            console.log(err);

            setLoading(false);

        }

    };

    const refreshUser = async () => {

        try {

            const res = await fetch(
                "/api/users/profile",
                {
                    credentials: "include",
                }
            );

            if (!res.ok) return;

            const user =
                await res.json();

            setAccount(user);

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

        } catch (err) {

            console.log(err);

        }

    };

    const buyAgain = async () => {

        try {

            for (const item of order.products) {

                await fetch(
                    "/api/cart/add",
                    {
                        method: "POST",
                        credentials:
                            "include",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify(
                            {
                                productId:
                                    item.product
                                        ?._id,

                                quantity:
                                    item.quantity,
                            }
                        ),
                    }
                );

            }

            await refreshUser();

            alert(
                "Products added to cart."
            );

        } catch (err) {

            console.log(err);

        }

    };

    const cancelOrder = async () => {

        try {

            const res = await fetch(
                `/api/orders/cancel/${order._id}`,
                {
                    method: "PATCH",
                    credentials:
                        "include",
                }
            );

            if (res.ok) {

                fetchOrder();

            }

        } catch (err) {

            console.log(err);

        }

    };

    const getProgressIndex = () => {

        if (
            order.orderStatus ===
            "Cancelled"
        ) {
            return -1;
        }

        return statusSteps.indexOf(
            order.orderStatus
        );

    };

    if (loading) {

        return (
            <h2
                style={{
                    padding: "40px",
                }}
            >
                Loading...
            </h2>
        );

    }

    if (!order) {

        return (
            <h2
                style={{
                    padding: "40px",
                }}
            >
                Order not found
            </h2>
        );

    }

    const progress =
        getProgressIndex();

    const isAdmin =
        account?.role === "admin";
    return (
        <div className="order-details-page">

            <button
                className="back-btn"
                onClick={() => history.goBack()}
            >
                ← Back to Orders
            </button>

            <div className="order-header">

                <h2>
                    Order #{order._id.slice(-8)}
                </h2>

                <h3>
                    Status : {order.orderStatus}
                </h3>

            </div>

            {/* Progress Tracker */}

            {order.orderStatus !==
                "Cancelled" && (

                    <div className="progress-container">

                        {statusSteps.map(
                            (
                                step,
                                index
                            ) => (

                                <div
                                    key={step}
                                    className="progress-step"
                                >

                                    <div
                                        className={
                                            index <=
                                                progress
                                                ? "circle active"
                                                : "circle"
                                        }
                                    >
                                        ✓
                                    </div>

                                    <p>
                                        {step}
                                    </p>

                                </div>

                            )
                        )}

                    </div>

                )}

            {order.orderStatus ===
                "Cancelled" && (

                    <div className="cancelled-banner">

                        ❌ This order has been
                        cancelled.

                    </div>

                )}

            {/* Product Grid */}

            <h3
                style={{
                    marginTop: 40,
                }}
            >
                Products
            </h3>

            <div className="products-grid">

                {order.products.map(
                    (item) => (

                        <div
                            key={
                                item.product
                                    ?._id
                            }
                            className="product-card"
                        >

                            <img
                                src={
                                    item.product
                                        ?.images?.[0]
                                }
                                alt={
                                    item.product
                                        ?.name
                                }
                            />

                            <h4>
                                {
                                    item.product
                                        ?.name
                                }
                            </h4>

                            <p>
                                Quantity :
                                {" "}
                                {
                                    item.quantity
                                }
                            </p>

                            <h3>
                                ₹
                                {(
                                    item.price *
                                    item.quantity
                                ).toFixed(
                                    2
                                )}
                            </h3>

                        </div>

                    )
                )}

            </div>

            {/* Admin */}

            {isAdmin && (

                <div className="info-box">

                    <h3>
                        Customer Details
                    </h3>

                    <p>
                        <strong>
                            Name :
                        </strong>{" "}
                        {
                            order.user
                                ?.fname
                        }{" "}
                        {
                            order.user
                                ?.lname
                        }
                    </p>

                    <p>
                        <strong>
                            Email :
                        </strong>{" "}
                        {
                            order.user
                                ?.email
                        }
                    </p>

                </div>

            )}

            {/* Shipping */}

            <div className="info-box">

                <h3>
                    Shipping Address
                </h3>

                <p>
                    {
                        order
                            .shippingAddress
                            ?.fullName
                    }
                </p>

                <p>
                    {
                        order
                            .shippingAddress
                            ?.address
                    }
                </p>

                <p>
                    {
                        order
                            .shippingAddress
                            ?.city
                    }
                    ,{" "}
                    {
                        order
                            .shippingAddress
                            ?.state
                    }
                </p>

                <p>
                    {
                        order
                            .shippingAddress
                            ?.pincode
                    }
                </p>

            </div>

            {/* Payment */}

            <div className="info-box">

                <h3>
                    Payment Details
                </h3>

                <p>
                    <strong>
                        Payment Status :
                    </strong>{" "}
                    {
                        order.paymentStatus
                    }
                </p>

                <p>
                    <strong>
                        Total :
                    </strong>{" "}
                    ₹
                    {Number(
                        order.totalAmount
                    ).toFixed(2)}
                </p>

                <p>
                    <strong>
                        Razorpay Payment
                        ID :
                    </strong>{" "}
                    {order.payment
                        ?.razorpayPaymentId ||
                        "N/A"}
                </p>

            </div>

            {/* Actions */}

            {!isAdmin && (

                <div className="actions">

                    <button
                        className="buy-btn"
                        onClick={
                            buyAgain
                        }
                    >
                        Buy Again
                    </button>

                    {order.orderStatus !==
                        "Cancelled" && (

                            <button
                                className="cancel-btn"
                                onClick={
                                    cancelOrder
                                }
                            >
                                Cancel
                                Order
                            </button>

                        )}

                </div>

            )}

        </div>
    );
}
export default OrderDetails;