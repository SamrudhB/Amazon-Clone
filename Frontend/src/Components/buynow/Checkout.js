import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
    const history = useHistory();

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const [address, setAddress] = useState({
        fullName: "",
        mobile: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: "",
    });

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const res = await fetch("/api/cart", {
                credentials: "include",
            });

            const data = await res.json();

            setCart(data || []);
        } catch (err) {
            console.log(err);
        }
    };

    const total = cart.reduce(
        (sum, item) =>
            sum + item.product.price.cost * item.quantity,
        0
    );

    const payNow = async () => {
        try {
            setLoading(true);

            // 1. Create Razorpay Order
            const res = await fetch(
                "/api/payment/create-order",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                setLoading(false);
                return;
            }

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,

                amount: data.razorpayOrder.amount,

                currency: "INR",

                name: "Amazon Clone",

                description: "Order Payment",

                order_id: data.razorpayOrder.id,

                handler: async function (response) {
                    const verify = await fetch(
                        "/api/payment/verify",
                        {
                            method: "POST",

                            credentials: "include",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body: JSON.stringify({
                                razorpay_order_id:
                                    response.razorpay_order_id,

                                razorpay_payment_id:
                                    response.razorpay_payment_id,

                                razorpay_signature:
                                    response.razorpay_signature,

                                shippingAddress:
                                    address,
                            }),
                        }
                    );

                    const verifyData =
                        await verify.json();

                    if (verify.ok) {
                        alert("Payment Successful");

                        history.push("/orders");
                    } else {
                        alert(
                            verifyData.message ||
                            "Verification Failed"
                        );
                    }
                },

                prefill: {
                    name: address.fullName,

                    contact: address.mobile,
                },

                theme: {
                    color: "#febd69",
                },
            };

            const razor = new window.Razorpay(
                options
            );

            razor.open();

            setLoading(false);
        } catch (err) {
            console.log(err);

            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">

            <h1>Checkout</h1>

            <div className="checkout-container">

                <div className="left-section">

                    <h2>Shipping Address</h2>

                    <input
                        placeholder="Full Name"
                        value={address.fullName}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                fullName: e.target.value,
                            })
                        }
                    />

                    <input
                        placeholder="Mobile"
                        value={address.mobile}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                mobile: e.target.value,
                            })
                        }
                    />

                    <textarea
                        placeholder="Address"
                        value={address.addressLine}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                addressLine:
                                    e.target.value,
                            })
                        }
                    />

                    <input
                        placeholder="City"
                        value={address.city}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                city: e.target.value,
                            })
                        }
                    />

                    <input
                        placeholder="State"
                        value={address.state}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                state: e.target.value,
                            })
                        }
                    />

                    <input
                        placeholder="Pincode"
                        value={address.pincode}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                pincode: e.target.value,
                            })
                        }
                    />

                </div>

                <div className="right-section">

                    <h2 className="order-summary-title">Order Summary</h2>

                    {cart.map((item) => (
                        <div
                            key={item.product._id}
                            className="summary-card"
                        >

                            <img
                                src={item.product.images[0]}
                                alt=""
                            />

                            <div>

                                <h4>
                                    {item.product.name}
                                </h4>

                                <p>
                                    Qty :
                                    {item.quantity}
                                </p>

                                <p>
                                    ₹
                                    {(item.product.price.cost * item.quantity).toFixed(2)}
                                </p>

                            </div>

                        </div>
                    ))}

                    <hr />

                    <h3>
                        Total :
                        ₹{total.toFixed(2)}
                    </h3>

                    <button
                        disabled={loading}
                        onClick={payNow}
                    >
                        {loading
                            ? "Loading..."
                            : "Pay with Razorpay"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Checkout;