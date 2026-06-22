import React, { useEffect } from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/action";
import { NavLink } from "react-router-dom";

const Maincomp = () => {
    const dispatch = useDispatch();

    const { products = [] } = useSelector(
        (state) => state.getproductsdata
    );

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const getItems = (start, end) => {
        return Array.isArray(products) ? products.slice(start, end) : [];
    };

    const cards = [
        {
            title: "Pick up where you left off",
            items: getItems(0, 4),
            sponsored: false,
        },
        {
            title: "Continue shopping deals",
            items: getItems(4, 8),
            sponsored: false,
        },
        {
            title: "Keep shopping for",
            items: getItems(8, 12),
            sponsored: false,
        },

        {
            title: "Revamp your home in style",
            sponsored: true,
        },

        {
            title: "Up to 75% off",
            items: getItems(8, 12),
            sponsored: false,
        },
        {
            title: "Appliances for your home",
            items: getItems(4, 8),
            sponsored: false,
        },
        {
            title: "Baby care & kitchen",
            items: getItems(2, 6),
            sponsored: false,
        },
        {
            title: "Trending products",
            items: getItems(9, 11),
            sponsored: false,
        },
    ];

    return (
        <>
            <div className="home_section">

                <Banner />

                <div className="amazon-home-grid">

                    {cards.map((card, index) => (
                        <div className="amazon-card" key={index}>
                            <h2>{card.title}</h2>

                            {card.sponsored ? (
                                <>
                                    <img
                                        className="sponsored-image"
                                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
                                        alt="Sponsored"
                                    />

                                    <button
                                        type="button"
                                        className="see-more-btn"
                                    >
                                        See more
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="amazon-card-grid">

                                        {(card.items || []).length > 0 ? (
                                            card.items.map((item) => (
                                                <NavLink
                                                    key={item._id}
                                                    to={`/products/${item._id}`}
                                                >
                                                    <div className="amazon-small-item">
                                                        <img
                                                            src={item.images?.[0] || ""}
                                                            alt={item.name || "product"}
                                                        />
                                                        <span>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </NavLink>
                                            ))
                                        ) : (
                                            <p style={{ fontSize: "12px", color: "#888" }}>
                                                No products available
                                            </p>
                                        )}

                                    </div>

                                    <p className="amazon-link">
                                        See more
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <Slide
                    title="Based on your browsing history"
                    products={products}
                />

                <Slide
                    title="Related to items you've viewed"
                    products={products}
                />

                {/* Banner */}
                <div className="center_img">
                    <img
                        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                        alt="Promotional Banner"
                    />
                </div>

                <Slide
                    title="Best Sellers"
                    products={products}
                />

            </div>

            <Divider />
        </>
    );
};

export default Maincomp;