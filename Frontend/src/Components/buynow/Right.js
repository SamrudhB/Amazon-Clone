import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useHistory } from "react-router";

const Right = ({ iteam }) => {
    const [val, setVal] = useState(false);
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        const total = iteam.reduce(
            (sum, item) =>
                sum + item.product.price.cost * item.quantity,
            0
        );

        setPrice(total);
    }, [iteam]);

    const proceesby = async () => {
        history.push("/checkout");
    };

    return (
        <div className="right_buy">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                alt="rightimg"
            />

            <div className="cost_right">
                <p>
                    Your order is eligible for FREE Delivery.
                    <br />
                    <span style={{ color: "#565959" }}>
                        Select this option at checkout.
                    </span>
                </p>

                <h3>
                    Subtotal ({iteam.length} items):{" "}
                    <span style={{ fontWeight: "700" }}>
                        ₹{price.toFixed(2)}
                    </span>
                </h3>

                <button
                    className="rightbuy_btn"
                    onClick={proceesby}
                    disabled={loading || iteam.length === 0}
                >
                    {loading ? "Creating Order..." : "Proceed to Buy"}
                </button>

                <div
                    className="emi"
                    onClick={() => setVal(!val)}
                    style={{ cursor: "pointer" }}
                >
                    EMI available
                    {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>

                <span className={val ? "show" : "hide"}>
                    Your order qualifies for EMI with valid credit cards (not available
                    on purchases of Gold, Jewelry, Gift Cards, and Amazon Pay balance
                    top-up).
                </span>
            </div>
        </div>
    );
};

export default Right;