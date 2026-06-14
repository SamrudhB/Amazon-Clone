import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./buynow.css";
import Empty from "./Empty";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";

const Buynow = () => {
    const [cartdata, setCartdata] = useState([]);

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
                alert("No cart data available");
                return;
            }

            setCartdata(data);
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
                                const e = item.product;
                                const quantity = item.quantity;

                                // Total price for this cart item
                                const totalPrice = e.price.cost * quantity;

                                return (
                                    <React.Fragment key={e._id}>
                                        <div className="item_containert">
                                            <img
                                                src={e.images?.[0]}
                                                alt={e.name}
                                            />

                                            <div className="item_details">
                                                <h3>{e.description}</h3>

                                                <h3>{e.name}</h3>

                                                {/* Total price for this product */}
                                                <h3 className="diffrentprice">
                                                    ₹{totalPrice.toFixed(2)}
                                                </h3>

                                                {/* Optional: show unit price */}
                                                <p>
                                                    Unit Price: ₹
                                                    {Number(e.price.cost).toFixed(2)}
                                                </p>

                                                <p>
                                                    Quantity: <strong>{quantity}</strong>
                                                </p>

                                                <p className="unusuall">
                                                    Usually dispatched in 8 days.
                                                </p>

                                                <p>Eligible for FREE Shipping</p>

                                                <img
                                                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                                                    alt="Prime"
                                                />

                                                <Option
                                                    deletedata={e._id}
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

