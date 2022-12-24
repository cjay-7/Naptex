import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <div className="signin-container container">
      <Helmet>
        <title>Naptex: Sign In</title>
      </Helmet>
      <h1 className="signin-header">Sign In</h1>
      <form className="signin-form">
        <div className="signin-email-input">
          <label for="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="signin-password-input">
          <label for="password">Password</label>
          <input type="password" id="password" required />
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
