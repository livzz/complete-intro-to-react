// @flow
import React from "react";
import { Link } from "react-router-dom"

const Landing = () => (
  <div className="landing">
    <h1> Svideo </h1>
    <input type="text" placeholder="Search" />
    <Link to="/search"> Browse File </Link>
  </div>
);

export default Landing
