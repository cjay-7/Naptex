import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

export default function SigninScreen() {
  const showToastMessage = () => {};
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/signin", {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setIsLoggedin(true);
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err), {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div className="signin-container container">
      <Helmet>
        <title>Naptex: Sign In</title>
      </Helmet>
      <h1 className="signin-header">Sign In</h1>
      <form className="signin-form" onSubmit={submitHandler}>
        <div className="signin-email-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signin-password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="signin-button" type="submit">
            Sign In
          </button>
        </div>
        <div className="signin-signup-container">
          New Customer?&nbsp;
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </form>
    </div>
  );
}
