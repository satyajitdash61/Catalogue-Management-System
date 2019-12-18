import React, { Component } from "react";
import "./Home.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import Buy from "../Buy/Buy";
import { Link, Switch, Route } from "react-router-dom";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      status: "product_details"
    };
  }
  render() {
    return (     
      <div>
        {this.state.status === "product_details" ? <ProductDetails /> : <Buy />}
      </div>
    );
  }
}

export default Home;
