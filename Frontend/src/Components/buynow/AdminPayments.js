import React, { useEffect, useMemo, useState } from "react";
import "./AdminPayments.css";

const AdminPayments = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/payment/admin", {
                credentials: "include",
            });

            const data = await res.json();

            setPayments(Array.isArray(data) ? data : []);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const filteredPayments = useMemo(() => {
        return payments.filter((payment) => {
            const value = search.toLowerCase();

            return (
                payment?.user?.fname
                    ?.toLowerCase()
                    ?.includes(value) ||
                payment?.user?.lname
                    ?.toLowerCase()
                    ?.includes(value) ||
                payment?.user?.email
                    ?.toLowerCase()
                    ?.includes(value) ||
                payment?.razorpayPaymentId
                    ?.toLowerCase()
                    ?.includes(value) ||
                payment?.razorpayOrderId
                    ?.toLowerCase()
                    ?.includes(value)
            );
        });
    }, [payments, search]);

    const totalRevenue = filteredPayments.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    return (
        <div className="admin-payments">

            <div className="payment-header">

                <h2>Payment History</h2>

                <input
                    type="text"
                    placeholder="Search customer, email or payment id..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="payment-summary">

                <div className="summary-card">
                    <span>Total Payments</span>
                    <h3>{filteredPayments.length}</h3>
                </div>

                <div className="summary-card">
                    <span>Total Revenue</span>
                    <h3>
                        ₹
                        {totalRevenue.toLocaleString(
                            "en-IN"
                        )}
                    </h3>
                </div>

            </div>

            {loading ? (
                <div className="loader">
                    Loading payments...
                </div>
            ) : (
                <div className="table-wrapper">

                    <table>

                        <thead>

                            <tr>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Method</th>
                                <th>Payment ID</th>
                                <th>Order ID</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredPayments.map(
                                (payment) => (
                                    <tr
                                        key={payment._id}
                                    >
                                        <td>
                                            {new Date(
                                                payment.createdAt
                                            ).toLocaleDateString()}
                                        </td>

                                        <td>
                                            {payment.user
                                                ?.fname}{" "}
                                            {
                                                payment
                                                    .user
                                                    ?.lname
                                            }
                                        </td>

                                        <td>
                                            {
                                                payment
                                                    .user
                                                    ?.email
                                            }
                                        </td>

                                        <td>
                                            ₹
                                            {payment.amount.toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>

                                        <td>
                                            <span
                                                className={`status ${payment.paymentStatus.toLowerCase()}`}
                                            >
                                                {
                                                    payment.paymentStatus
                                                }
                                            </span>
                                        </td>

                                        <td>
                                            {
                                                payment.paymentMethod
                                            }
                                        </td>

                                        <td className="small-text">
                                            {
                                                payment.razorpayPaymentId
                                            }
                                        </td>

                                        <td className="small-text">
                                            {
                                                payment.razorpayOrderId
                                            }
                                        </td>
                                    </tr>
                                )
                            )}

                        </tbody>

                    </table>

                </div>
            )}
        </div>
    );
};

export default AdminPayments;