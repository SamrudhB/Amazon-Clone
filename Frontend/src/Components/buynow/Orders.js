import React, { useContext, useEffect, useState } from "react";
import "./Orders.css";
import { Logincontext } from "../context/Contextprovider";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const { account, setAccount } =
        useContext(Logincontext);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch("/api/orders", {
                credentials: "include",
            });

            const data = await res.json();

            setOrders(Array.isArray(data) ? data : []);
        } catch (err) {
            console.log(err);
        }
    };

    const refreshUser = async () => {
        try {
            const res = await fetch(
                "/api/users/profile",
                {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type":
                            "application/json",
                    },
                }
            );

            if (!res.ok) return;

            const user = await res.json();

            setAccount(user);

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
        } catch (err) {
            console.log(err);
        }
    };

    const cancelOrder = async (id) => {
        try {
            const res = await fetch(
                `/api/orders/cancel/${id}`,
                {
                    method: "PATCH",
                    credentials: "include",
                }
            );

            if (res.ok) {
                fetchOrders();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const buyAgain = async (order) => {
        try {
            for (const item of order.products) {
                await fetch("/api/cart/add", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        productId:
                            item.product?._id,
                        quantity:
                            item.quantity,
                    }),
                });
            }

            await refreshUser();

            alert(
                "Products added back to cart."
            );
        } catch (err) {
            console.log(err);
        }
    };

    const isAdmin =
        account?.role === "admin";

    return (
        <div className="orders-page">

            <h1>
                {isAdmin
                    ? "All Customer Orders"
                    : "Your Orders"}
            </h1>

            {orders.length === 0 && (
                <div className="empty-orders">
                    No orders found.
                </div>
            )}

            {orders.map((order) => (
                <div
                    className="order-card"
                    key={order._id}
                >
                    <div className="order-top">

                        <div>
                            <span className="title">
                                ORDER DATE
                            </span>

                            <p>
                                {new Date(
                                    order.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <span className="title">
                                TOTAL
                            </span>

                            <p>
                                ₹
                                {Number(
                                    order.totalAmount
                                ).toFixed(2)}
                            </p>
                        </div>

                        <div>
                            <span className="title">
                                PAYMENT
                            </span>

                            <p>
                                {
                                    order.paymentStatus
                                }
                            </p>
                        </div>

                        <div>
                            <span className="title">
                                STATUS
                            </span>

                            <p className="status">
                                {
                                    order.orderStatus
                                }
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div
                        style={{
                            marginBottom: "15px",
                            paddingLeft: "10px",
                            paddingTop: "10px"
                        }}
                    >
                        <strong>
                            Order ID:
                        </strong>{" "}
                        {order._id}
                    </div>

                    {isAdmin && (
                        <>
                            <div
                                style={{
                                    marginBottom:
                                        "10px",
                                    paddingLeft: "10px"
                                }}
                            >
                                <strong>
                                    Customer:
                                </strong>{" "}
                                {order.user
                                    ?.fname ||
                                    "N/A"}{" "}
                                {order.user
                                    ?.lname ||
                                    ""}
                            </div>

                            <div
                                style={{
                                    marginBottom:
                                        "10px",
                                    paddingLeft: "10px"
                                }}
                            >
                                <strong>
                                    Email:
                                </strong>{" "}
                                {order.user
                                    ?.email ||
                                    "N/A"}
                            </div>

                            <div
                                style={{
                                    marginBottom:
                                        "10px",
                                    paddingLeft: "10px"
                                }}
                            >
                                <strong>
                                    Payment ID:
                                </strong>{" "}
                                {order.payment
                                    ?.razorpayPaymentId ||
                                    order.razorpayPaymentId ||
                                    "N/A"}
                            </div>

                            <div
                                style={{
                                    marginBottom:
                                        "10px",
                                    paddingLeft: "10px"
                                }}
                            >
                                <strong>
                                    Razorpay Order:
                                </strong>{" "}
                                {order.payment
                                    ?.razorpayOrderId ||
                                    order.razorpayOrderId ||
                                    "N/A"}
                            </div>

                            {order
                                ?.shippingAddress && (
                                    <div
                                        style={{
                                            marginBottom:
                                                "15px",
                                            paddingLeft: "10px"
                                        }}
                                    >
                                        <strong>
                                            delivered to ..
                                        </strong>

                                        <div>
                                            {
                                                order
                                                    .shippingAddress
                                                    .fullName
                                            }
                                        </div>

                                        <div>
                                            {
                                                order
                                                    .shippingAddress
                                                    .address
                                            }
                                        </div>

                                        <div>
                                            {
                                                order
                                                    .shippingAddress
                                                    .city
                                            }
                                            ,{" "}
                                            {
                                                order
                                                    .shippingAddress
                                                    .state
                                            }
                                        </div>

                                        <div>
                                            {
                                                order
                                                    .shippingAddress
                                                    .pincode
                                            }
                                        </div>
                                    </div>
                                )}
                        </>
                    )}

                    <hr />

                    {order.products.map(
                        (item) => (
                            <div
                                className="product-row"
                                key={
                                    item._id ||
                                    item
                                        .product
                                        ?._id
                                }
                            >
                                <img
                                    src={
                                        item
                                            .product
                                            ?.images?.[0]
                                    }
                                    alt={
                                        item
                                            .product
                                            ?.name
                                    }
                                />

                                <div className="product-info">
                                    <h3>
                                        {
                                            item
                                                .product
                                                ?.name
                                        }
                                    </h3>

                                    <p>
                                        Quantity:{" "}
                                        {
                                            item.quantity
                                        }
                                    </p>

                                    <p>
                                        ₹
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                            </div>
                        )
                    )}

                    {!isAdmin && (
                        <div className="actions">

                            <button
                                className="buy-btn"
                                onClick={() =>
                                    buyAgain(
                                        order
                                    )
                                }
                            >
                                Buy Again
                            </button>

                            {order.orderStatus !==
                                "Cancelled" &&
                                order.orderStatus !==
                                "Delivered" && (
                                    <button
                                        className="cancel-btn"
                                        onClick={() =>
                                            cancelOrder(
                                                order._id
                                            )
                                        }
                                    >
                                        Cancel
                                        Order
                                    </button>
                                )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Orders;