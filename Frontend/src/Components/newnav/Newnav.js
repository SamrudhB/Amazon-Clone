import React, { useEffect, useState, useContext } from "react";
import "./newnav.css";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider";

const Newnav = () => {
    const [category, setCategory] = useState([]);
    const { account } = useContext(Logincontext);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const res = await fetch("/api/products/categories");
        const data = await res.json();
        setCategory(data.categories || []);
    };

    // Hide for admin
    if (account?.role === "admin") {
        return null;
    }

    const sortedCategories = [...category].sort();

    return (
        <div className="new_nav">
            <div className="nav_data">

                <div className="left_data">
                    <NavLink to="/all" className="navlink">
                        ☰ All
                    </NavLink>

                    {sortedCategories.map((cat) => (
                        <NavLink
                            key={cat}
                            to={`/category/${encodeURIComponent(cat)}`}
                            className="navlink"
                        >
                            {cat}
                        </NavLink>
                    ))}
                </div>

                <div className="right_data">
                    <img src="/nav.jpg" alt="nav" />
                </div>

            </div>
        </div>
    );
};

export default Newnav;