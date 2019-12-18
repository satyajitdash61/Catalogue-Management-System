import React from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import ProductDetails from "../../client/src/Components/ProductDetails/ProductDetails";
import Buy from "../../client/src/Components/Buy/Buy";

function App() {
  return (
    <div className="App">
      <div id="Navbar">
                <p id = 'Logo'>SHOPIFY</p>
                <Link to="/"><p id = 'sell'> Sell</p></Link>
                <Link to="/buy"><p id = 'buy'> Buy</p></Link>
            </div>
      <Switch>
            <Route exact path="/" component = {ProductDetails}/>
            <Route exact path="/buy" component = {Buy }/>
        </Switch>
    </div>
  );
}

export default App;
