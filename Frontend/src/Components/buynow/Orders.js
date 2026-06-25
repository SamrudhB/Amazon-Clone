import React, {
    useContext,
    useEffect,
    useState,
} from "react";

import { useHistory } from "react-router-dom";

import "./Orders.css";

import { Logincontext } from "../context/Contextprovider";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const { account } =
        useContext(Logincontext);

    const history = useHistory();

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch(
                "/api/orders",
                {
                    credentials: "include",
                }
            );

            const data = await res.json();

            setOrders(
                Array.isArray(data)
                    ? data
                    : []
            );
        } catch (err) {
            console.log(err);
        }
    };

    // Navigate to individual order details page
    const viewOrderDetails = (
        orderId
    ) => {
        history.push(`/orders/${orderId}`);
    };

    // Admin check
    const isAdmin =
        account?.role === "admin";

    // Status icon helper
    const getStatusDisplay = (
        status
    ) => {
        switch (status) {
            case "Delivered":
                return "✅ Delivered";

            case "Cancelled":
                return "❌ Cancelled";

            case "Out For Delivery":
                return "🚚 Out For Delivery";

            case "Shipped":
                return "🚛 Shipped";

            case "Packed":
                return "📦 Packed";

            case "Confirmed":
                return "✔️ Confirmed";

            default:
                return "⏳ Pending";
        }
    };

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
                                ORDER ID
                            </span>

                            <p>
                                {order._id}
                            </p>
                        </div>

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
                                {order.paymentStatus}
                            </p>
                        </div>

                        <div>
                            <span className="title">
                                STATUS
                            </span>

                            <p className="status">
                                {getStatusDisplay(
                                    order.orderStatus
                                )}
                            </p>
                        </div>

                    </div>

                    {isAdmin && (
                        <div
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            <p>
                                <strong>
                                    Customer:
                                </strong>{" "}
                                {order.user?.fname}{" "}
                                {order.user?.lname}
                            </p>

                            <p>
                                <strong>
                                    Email:
                                </strong>{" "}
                                {order.user?.email}
                            </p>
                        </div>
                    )}

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent:
                                "space-between",
                            alignItems:
                                "center",
                        }}
                    >

                        <div>
                            <strong>
                                {order.products.length}
                            </strong>{" "}
                            item(s)
                        </div>

                        <button
                            className="buy-btn"
                            onClick={() =>
                                viewOrderDetails(
                                    order._id
                                )
                            }
                        >
                            View Details →
                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
}
export default Orders;