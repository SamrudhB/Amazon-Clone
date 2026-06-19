import React, { useContext, useEffect, useState } from "react";
import "../header/navbaar.css";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Rightheader from "./Rightheader";

import { getProducts } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const usestyle = makeStyles({
    component: {
        marginTop: 10,
        marginRight: "-50px",
        width: "300px",
        padding: 50,
        height: "300px",
    },
});

const Navbaar = () => {
    const classes = usestyle();
    const history = useHistory();

    const [text, setText] = useState("");
    const [liopen, setLiopen] = useState(true);

    const [dropen, setDropen] = useState(false);

    // FIX: Menu anchor state
    const [anchorEl, setAnchorEl] = useState(null);

    const { products } = useSelector((state) => state.getproductsdata);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { account, setAccount } = useContext(Logincontext);

    // ---------------- SEARCH ----------------
    const getText = (text) => {
        setText(text);
        setLiopen(false);
    };

    // ---------------- USER PROFILE ----------------
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

            if (!data) {
                setAccount(null);
                return;
            }

            setAccount(data);

            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("role", data.role);
        } catch (err) {
            console.log(err);
            setAccount(null);
        }
    };

    useEffect(() => {
        getdetailsvaliduser();
    }, []);

    // ---------------- LOGOUT ----------------
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

    // ---------------- DRAWER ----------------
    const handelopen = () => setDropen(true);
    const handleClosedr = () => setDropen(false);

    // ---------------- MENU ----------------
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <nav>
                {/* LEFT SIDE */}
                <div className="left">
                    <IconButton className="hamburgur" onClick={handelopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>

                    <Drawer open={dropen} onClose={handleClosedr}>
                        <Rightheader userlog={logoutuser} logclose={handleClosedr} />
                    </Drawer>

                    <div className="navlogo">
                        <NavLink to="/">
                            <img src="/amazon_PNG25.png" alt="logo" />
                        </NavLink>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="nav_searchbaar">
                        <input
                            type="text"
                            onChange={(e) => getText(e.target.value)}
                            placeholder="Search Your Products"
                        />

                        <div className="search_icon">
                            <i className="fas fa-search" id="search"></i>
                        </div>

                        {text && (
                            <List className="extrasearch" hidden={liopen}>
                                {products
                                    .filter((product) =>
                                        product.name.toLowerCase().includes(text.toLowerCase())
                                    )
                                    .map((product) => (
                                        <ListItem key={product._id}>
                                            <NavLink
                                                to={`/products/${product._id}`}
                                                onClick={() => setLiopen(true)}
                                            >
                                                {product.name}
                                            </NavLink>
                                        </ListItem>
                                    ))}
                            </List>
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="right">
                    {account ? (
                        <div className="nav_btn">
                            <NavLink to="/orders">Returns & orders</NavLink>
                        </div>
                    ) : (
                        <div className="nav_btn">
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    )}

                    {account?.role === "admin" && (
                        <div className="nav_btn">
                            <NavLink to="/admin">Admin Dashboard</NavLink>
                        </div>
                    )}

                    {/* CART */}
                    <NavLink to={account ? "/buynow" : "/login"}>
                        <div className="cart_btn">
                            <Badge
                                badgeContent={account?.cart?.length || 0}
                                color="secondary"
                            >
                                <i className="fas fa-shopping-cart" id="icon"></i>
                            </Badge>
                            <p>Cart</p>
                        </div>
                    </NavLink>

                    {/* AVATAR */}
                    {account ? (
                        <Avatar
                            className="avtar2"
                            onClick={handleClick}
                            title={account?.fname?.toUpperCase()}
                        >
                            {account?.fname?.charAt(0)?.toUpperCase()}
                        </Avatar>
                    ) : (
                        <Avatar className="avtar" onClick={handleClick} />
                    )}

                    {/* MENU */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className={classes.component}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>

                        {account && (
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    logoutuser();
                                }}
                            >
                                <LogoutIcon
                                    style={{ fontSize: 16, marginRight: 3 }}
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