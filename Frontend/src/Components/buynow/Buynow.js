import { Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./buynow.css";
import Empty from "./Empty";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
import { Logincontext } from "../context/Contextprovider";

const Buynow = () => {
    const [cartdata, setCartdata] = useState([]);
    const { setAccount } = useContext(Logincontext);

    // Refresh navbar cart count
    const refreshUser = async () => {
        try {
            const res = await fetch("/api/users/profile", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) return;

            const user = await res.json();

            setAccount(user);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (err) {
            console.log(err);
        }
    };

    // Refresh cart items
    const getdatabuy = async () => {
        try {
            const res = await fetch("/api/cart", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok) {
                setCartdata([]);
                return;
            }

            setCartdata(data);

            // Also update navbar badge
            refreshUser();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getdatabuy();
    }, []);

    return (
        <>
            {cartdata.length > 0 ? (
                <div className="buynow_section">
                    <div className="buynow_container">
                        <div className="left_buy">
                            <h1>Shopping Cart</h1>

                            <p>Select all items</p>

                            <span className="leftbuyprice">Price</span>

                            <Divider />

                            {cartdata.map((item) => {
                                const product = item.product;
                                const quantity = item.quantity;

                                if (!product) return null;

                                const totalPrice =
                                    Number(product.price.cost) * quantity;

                                return (
                                    <React.Fragment key={product._id}>
                                        <div className="item_containert">
                                            <img
                                                src={product.images?.[0]}
                                                alt={product.name}
                                            />

                                            <div className="item_details">
                                                <h3>{product.description}</h3>

                                                <h3>{product.name}</h3>

                                                <h3 className="diffrentprice">
                                                    ₹{totalPrice.toFixed(2)}
                                                </h3>

                                                <p>
                                                    Unit Price: ₹
                                                    {Number(
                                                        product.price.cost
                                                    ).toFixed(2)}
                                                </p>

                                                <p>
                                                    Quantity:{" "}
                                                    <strong>{quantity}</strong>
                                                </p>

                                                <p className="unusuall">
                                                    Usually dispatched in 8
                                                    days.
                                                </p>

                                                <p>
                                                    Eligible for FREE Shipping
                                                </p>

                                                <img
                                                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                                                    alt="Prime"
                                                />

                                                <Option
                                                    deletedata={product._id}
                                                    quantity={quantity}
                                                    get={getdatabuy}
                                                />
                                            </div>

                                            <h3 className="item_price">
                                                ₹{totalPrice.toFixed(2)}
                                            </h3>
                                        </div>

                                        <Divider />
                                    </React.Fragment>
                                );
                            })}

                            <Subtotal iteam={cartdata} />
                        </div>

                        <Right iteam={cartdata} />
                    </div>
                </div>
            ) : (
                <Empty />
            )}
        </>
    );
};

export default Buynow;
