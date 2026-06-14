import React, { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await fetch("/api/orders", {
                method: "GET",
                credentials: "include",
            });

            const data = await res.json();
            setOrders(data);
        };

        fetchOrders();
    }, []);

    const cancelOrder = async (id) => {
        try {
            await fetch(`/api/orders/cancel/${id}`, {
                method: "PATCH",
                credentials: "include",
            });

            setOrders((prev) =>
                prev.map((order) =>
                    order._id === id
                        ? { ...order, orderStatus: "Cancelled" }
                        : order
                )
            );
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="orders-page">
            <h1>Your Orders</h1>

            {orders.length === 0 ? (
                <div className="empty-orders">
                    You haven't placed any orders yet.
                </div>
            ) : (
                orders.map((order) => (
                    <div className="order-card" key={order._id}>
                        <div className="order-header">
                            <div>
                                <span className="label">ORDER PLACED</span>
                                <p>
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div>
                                <span className="label">TOTAL</span>
                                <p>₹{order.totalAmount.toFixed(2)}</p>
                            </div>

                            <div>
                                <span className="label">STATUS</span>
                                <p
                                    className={`status ${order.orderStatus.toLowerCase()}`}
                                >
                                    {order.orderStatus}
                                </p>
                            </div>

                            <div>
                                <span className="label">ORDER ID</span>
                                <p>{order._id}</p>
                            </div>
                        </div>

                        {order.products.map((item, index) => (
                            <div className="order-product" key={index}>
                                <img
                                    src={item.product?.images?.[0] || "/placeholder-image.png"}
                                    alt={item.product?.name || "Product"}
                                />

                                <div className="product-details">
                                    <h3>{item.product?.name || "Unknown Product"}</h3>

                                    <p>Quantity: {item.quantity}</p>

                                    <p>Price: ₹{item.price}</p>
                                </div>
                            </div>
                        ))}

                        {order.orderStatus !== "Cancelled" &&
                            order.orderStatus !== "Delivered" && (
                                <button
                                    className="cancel-btn"
                                    onClick={() => cancelOrder(order._id)}
                                >
                                    Cancel Order
                                </button>
                            )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Orders;