import React, { useContext } from "react";
import { Logincontext } from "../context/Contextprovider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Option.css";

const Option = ({ deletedata, get, quantity }) => {
    const { setAccount } = useContext(Logincontext);

    const updateQuantity = async (newQuantity) => {
        try {
            if (newQuantity < 1) return;

            const res = await fetch("/api/cart/update", {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    productId: deletedata,
                    quantity: newQuantity,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || data.error || "Failed to update quantity", {
                    position: "top-center",
                });
                return;
            }

            setAccount(data);

            // Refresh cart data in parent component
            if (get) {
                await get();
            }

            toast.success("Item quantity updated in cart", {
                position: "top-center",
            });
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong", {
                position: "top-center",
            });
        }
    };

    const removedata = async (id) => {
        try {
            const res = await fetch(`/api/cart/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error("Failed to remove item", {
                    position: "top-center",
                });
                return;
            }

            setAccount(data);

            if (get) {
                await get();
            }

            toast.success("Item removed from cart", {
                position: "top-center",
            });
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong", {
                position: "top-center",
            });
        }
    };

    return (
        <div className="add_remove_select">
            <div className="quantity_box">
                <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() => updateQuantity(quantity - 1)}
                >
                    −
                </button>

                <span className="quantity_value">{quantity}</span>

                <button
                    type="button"
                    onClick={() => updateQuantity(quantity + 1)}
                >
                    +
                </button>
            </div>

            <p
                onClick={() => removedata(deletedata)}
                style={{ cursor: "pointer" }}
            >
                Delete
            </p>

            <span>|</span>

            <p className="forremovemedia">Save for Later</p>

            <span>|</span>

            <p className="forremovemedia">See More Like This</p>
        </div>
    );
};

export default Option;