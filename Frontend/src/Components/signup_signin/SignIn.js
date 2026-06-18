import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Logincontext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


const Sign_in = () => {
  const history = useHistory();
  const { setAccount } = useContext(Logincontext);

  const [logdata, setData] = useState({
    email: "",
    password: ""
  });

  // console.log(data);

  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setData((pre) => {
      return {
        ...pre,
        [name]: value
      }
    })
  };
  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Invalid credentials");
        return;
      }

      setAccount(data.user);
      history.push("/");

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "role",
        data.user.role
      );

      setData({
        email: "",
        password: "",
      });

      toast.success("Login successful!");
    } catch (err) {
      console.log(err);
      toast.error("Server error");
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"
                onChange={adddata}
                value={logdata.email}
                id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"
                onChange={adddata}
                value={logdata.password}
                id="password" placeholder="At least 6 characters" />
            </div>
            <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
          </form>
          <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button>
        </div>
      </div>

    </section>
  )
}

export default Sign_in
