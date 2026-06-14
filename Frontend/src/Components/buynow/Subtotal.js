import React from 'react'
import { useEffect, useState } from 'react';

const Subtotal = ({ iteam }) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam]);

    const totalAmount = () => {

        const total = iteam.reduce(
            (sum, item) => sum + item.product.price.cost * item.quantity,
            0);

        setPrice(total);
    }

    return (
        <div className="sub_item">
            <h3>Subtotal ({iteam.length} items):<strong style={{ fontWeight: "700", color: "#111" }}>
                ₹{price.toFixed(2)}
            </strong></h3>
        </div>
    )
}

export default Subtotal
