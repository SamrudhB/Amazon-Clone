import React, { useContext, useEffect, useState } from "react";
import "../header/navbaar.css";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

import { NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Logincontext } from "../context/Contextprovider";
import Rightheader from "./Rightheader";

import { getProducts } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const useStyle = makeStyles({
    component: {
        marginTop: 10,
        marginRight: "-50px",
        width: "300px",
        padding: 30,
    },
});

const Navbaar = () => {
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [liopen, setLiopen] = useState(true);
    const [dropen, setDropen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [deliveryAddress, setDeliveryAddress] = useState(null);

    const { account, setAccount } = useContext(Logincontext);

    const { products } = useSelector(
        (state) => state.getproductsdata
    );

    const isAdmin = account?.role === "admin";

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        getdetailsvaliduser();
        getDeliveryAddress();
    }, []);

    const getText = (value) => {
        setText(value);
        setLiopen(false);
    };

    const getDeliveryAddress = async () => {
        try {
            const res = await fetch("/api/orders", {
                method: "GET",
                credentials: "include",
            });

            if (!res.ok) return;

            const data = await res.json();

            const orders = Array.isArray(data)
                ? data
                : data.orders || [];

            if (!orders.length) {
                setDeliveryAddress(null);
                return;
            }

            // latest order
            const latestOrder = orders.sort(
                (a, b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            )[0];

            setDeliveryAddress(
                latestOrder.shippingAddress || null
            );
        } catch (err) {
            console.log(err);
        }
    };

    const getdetailsvaliduser = async () => {
        try {
            const res = await fetch("/api/users/profile", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                setAccount(null);
                return;
            }

            const data = await res.json();

            setAccount(data);

            localStorage.setItem(
                "user",
                JSON.stringify(data)
            );

            localStorage.setItem(
                "role",
                data.role
            );
        } catch (err) {
            console.log(err);
            setAccount(null);
        }
    };

    const logoutuser = async () => {
        try {
            const res = await fetch("/api/users/logout", {
                method: "POST",
                credentials: "include",
            });

            if (!res.ok) return;

            localStorage.removeItem("user");
            localStorage.removeItem("role");

            setAccount(null);
            setAnchorEl(null);

            toast.success("Logged out successfully");

            history.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <header>
            <nav>
                {/* LEFT */}
                <div className="left">
                    <IconButton
                        className="hamburgur"
                        onClick={() => setDropen(true)}
                    >
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>

                    <Drawer
                        open={dropen}
                        onClose={() => setDropen(false)}
                    >
                        <Rightheader
                            userlog={logoutuser}
                            logclose={() => setDropen(false)}
                        />
                    </Drawer>

                    <div className="navlogo">
                        <NavLink to="/">
                            <img
                                src="/amazon_PNG25.png"
                                alt="Amazon"
                            />
                        </NavLink>
                    </div>

                    {/* SEARCH ONLY FOR CUSTOMER */}
                    {!isAdmin && (
                        <div className="nav_searchbaar">
                            <input
                                type="text"
                                placeholder="Search Products"
                                onChange={(e) =>
                                    getText(e.target.value)
                                }
                            />

                            <div className="search_icon">
                                <i
                                    className="fas fa-search"
                                    id="search"
                                ></i>
                            </div>

                            {text && (
                                <List
                                    className="extrasearch"
                                    hidden={liopen}
                                >
                                    {products
                                        ?.filter((item) =>
                                            item.name
                                                .toLowerCase()
                                                .includes(
                                                    text.toLowerCase()
                                                )
                                        )
                                        .map((product) => (
                                            <ListItem
                                                key={product._id}
                                            >
                                                <NavLink
                                                    to={`/products/${product._id} `}
                                                    onClick={() =>
                                                        setLiopen(true)
                                                    }
                                                >
                                                    {product.name}
                                                </NavLink>
                                            </ListItem>
                                        ))}
                                </List>
                            )}
                        </div>
                    )}
                </div>

                {/* RIGHT */}
                <div className="right">

                    {/* Customer (Not Logged In) */}
                    {!account && (
                        <>
                            {/* Hello Sign In */}
                            <div className="nav_text">
                                <NavLink to="/login">
                                    <div className="user_text">
                                        <span>Hello User,</span>
                                        <h4>Sign In
                                            <i
                                                className="fas fa-caret-down"
                                                style={{
                                                    marginLeft: "4px",
                                                    fontSize: "12px",
                                                }}
                                            />
                                        </h4>
                                    </div>
                                </NavLink>
                            </div>

                            {/* Cart */}
                            <NavLink to="/login">
                                <div className="cart_btn">
                                    <Badge badgeContent={0} color="secondary">
                                        <i
                                            className="fas fa-shopping-cart"
                                            id="icon"
                                        ></i>
                                    </Badge>
                                    <p>Cart</p>
                                </div>
                            </NavLink>
                        </>
                    )}

                    {/* Logged In Customer */}
                    {account && !isAdmin && (
                        <>
                            {/* Deliver To */}
                            <div className="nav_text">
                                <i
                                    className="fas fa-map-marker-alt"
                                    style={{
                                        marginRight: "5px",
                                    }}
                                />

                                <div>
                                    <div
                                        style={{
                                            fontSize: "11px",
                                            color: "#ddd",
                                        }}
                                    >
                                        Deliver to
                                    </div>

                                    <div
                                        style={{
                                            fontWeight: "bold",
                                            color: "#fff",
                                        }}
                                    >
                                        {deliveryAddress
                                            ? `${deliveryAddress.city}, ${deliveryAddress.pincode}`
                                            : "Select Address"}
                                    </div>
                                </div>
                            </div>

                            {/* Hello User */}
                            <div
                                className="nav_text"
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="user_text">
                                    <span>Hello, {account.fname}</span>
                                    <h4>Account &amp; Lists
                                        <i
                                            className="fas fa-caret-down"
                                            style={{
                                                marginLeft: "4px",
                                                fontSize: "12px",
                                            }}
                                        />
                                    </h4>
                                </div>
                            </div>

                            {/* Orders */}
                            <div className="nav_text">
                                <NavLink to="/orders">
                                    <span>Returns</span>
                                    <h4>&amp; Orders</h4>
                                </NavLink>
                            </div>

                            {/* Cart */}
                            <NavLink to={account ? "/buynow" : "/login"}>
                                <div className="cart_btn">
                                    <Badge
                                        badgeContent={account?.cart?.length || 0}
                                        color="secondary"
                                    >
                                        <i
                                            className="fas fa-shopping-cart"
                                            id="icon"
                                        ></i>
                                    </Badge>

                                    <p>Cart</p>
                                </div>
                            </NavLink>
                        </>
                    )}

                    {/* Logged In Admin */}
                    {account && isAdmin && (
                        <>
                            {/* Hello Admin */}
                            <div
                                className="nav_text nav_clickable"
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                            >
                                <span>Hello, {account.fname}</span>
                                <h4>Account &amp; Lists
                                    <i
                                        className="fas fa-caret-down"
                                        style={{
                                            marginLeft: "4px",
                                            fontSize: "12px",
                                        }}
                                    />
                                </h4>
                            </div>

                            {/* Admin Dashboard */}
                            <div className="nav_text">
                                <NavLink to="/admin">
                                    <span>Admin</span>
                                    <h4>Dashboard</h4>
                                </NavLink>
                            </div>

                            {/* Returns & Orders */}
                            <div className="nav_text">
                                <NavLink to="/orders">
                                    <span>Customer</span>
                                    <h4>Orders</h4>
                                </NavLink>
                            </div>

                            {/* Payments */}
                            <div className="nav_text">
                                <NavLink to="/admin/payments">
                                    <span>Bills</span>
                                    <h4>&amp;Payments</h4>
                                </NavLink>
                            </div>
                        </>
                    )}

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        className={classes.component}
                    >
                        {account && (
                            <MenuItem onClick={() => setAnchorEl(null)}>
                                {account.email}
                            </MenuItem>
                        )}

                        {account && (
                            <MenuItem
                                onClick={() => {
                                    setAnchorEl(null);
                                    logoutuser();
                                }}
                            >
                                <LogoutIcon
                                    style={{
                                        fontSize: 18,
                                        marginRight: 6,
                                    }}
                                />
                                Logout
                            </MenuItem>
                        )}
                    </Menu>

                    <ToastContainer />
                </div>
            </nav>
        </header>
    );
};

export default Navbaar;
