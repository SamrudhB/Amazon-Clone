import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sign_in = () => {
  const history = useHistory();
  const { setAccount } = useContext(Logincontext);

  // customer or admin
  const [loginType, setLoginType] = useState("customer");

  const [logdata, setData] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);

  const adddata = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CUSTOMER - SEND OTP
  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "/api/users/send-login-otp",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email: logdata.email,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(
          data.message ||
          "Unable to send OTP"
        );
        return;
      }

      setOtpSent(true);
      toast.success(
        "OTP sent successfully."
      );
    } catch (err) {
      console.log(err);
      toast.error("Server error");
    }
  };

  // CUSTOMER - VERIFY OTP
  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "/api/users/verify-login-otp",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email: logdata.email,
            otp: logdata.otp,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(
          data.message ||
          "Invalid OTP"
        );
        return;
      }

      setAccount(data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "role",
        data.user.role
      );

      toast.success(
        "Login successful!"
      );

      history.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Server error");
    }
  };

  // ADMIN LOGIN
  const adminLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "/api/users/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email: logdata.email,
            password:
              logdata.password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(
          data.message ||
          "Invalid credentials"
        );
        return;
      }

      setAccount(data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "role",
        data.user.role
      );

      toast.success(
        "Admin login successful!"
      );

      history.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Server error");
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img
            src="./blacklogoamazon.png"
            alt="logo"
          />
        </div>

        <div className="sign_form">
          <form>
            <h1>Sign In</h1>

            {/* Login Type */}
            <div
              style={{
                marginBottom: "15px",
              }}
            >
              <label style={{ marginRight: "10px" }}>
                Login As  :
              </label>

              <select
                value={loginType}
                onChange={(e) => {
                  setLoginType(
                    e.target.value
                  );
                  setOtpSent(false);
                  setData({
                    email: "",
                    password: "",
                    otp: "",
                  });
                }}
              >
                <option value="customer">
                  Customer
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>
            </div>

            {/* Email */}
            <div className="form_data">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={logdata.email}
                onChange={adddata}
              />
            </div>

            {/* Admin Password */}
            {loginType ===
              "admin" && (
                <div className="form_data">
                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={
                      logdata.password
                    }
                    onChange={adddata}
                  />
                </div>
              )}

            {/* Customer OTP */}
            {loginType ===
              "customer" &&
              otpSent && (
                <div className="form_data">
                  <label>OTP</label>

                  <input
                    type="text"
                    name="otp"
                    value={
                      logdata.otp
                    }
                    onChange={
                      adddata
                    }
                  />
                </div>
              )}

            {/* Buttons */}
            {loginType ===
              "customer" ? (
              !otpSent ? (
                <button
                  className="signin_btn"
                  onClick={sendOtp}
                >
                  Send OTP
                </button>
              ) : (
                <button
                  className="signin_btn"
                  onClick={
                    verifyOtp
                  }
                >
                  Verify OTP &
                  Login
                </button>
              )
            ) : (
              <button
                className="signin_btn"
                onClick={
                  adminLogin
                }
              >
                Login
              </button>
            )}
          </form>

          <ToastContainer />
        </div>

        <div className="create_accountinfo">
          <p>
            New to Amazon?
          </p>

          <button>
            <NavLink to="/signup">
              Create your Amazon
              Account
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sign_in;
