import React, { Component } from "react";
import "./Buy.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
class Buy extends Component {
  constructor() {
    super();
    this.state = {
      res: []
    };
  }
  componentDidMount() {
    fetch("https://react-shopify.herokuapp.com/product/buy")
      .then(response => response.json())
      .then(value => {
        console.log(value[0].name);
        this.setState({
          res: value
        });
      });
  }
  render() {
    const { res } = this.state;
    return (
      <div>
      <div id="filterdiv">
        
      </div>
      <div>
        {res.map(res => (
           <Card variant="mr-3">
           <Card.Header as="h3">{res["name"]}</Card.Header>
           <Card.Body>
             <Card.Title>{res["brand"]}</Card.Title>
             <Card.Text>
               <p> Category : {res["category"]}</p>
               <p> Parent Company : {res["parent"]} </p>
               <p> Breadcrumb : {res["breadcrumb"]}</p>
               <p> Specifications : {res["specifications"]}</p>
             </Card.Text>
           </Card.Body>
         </Card>
        ))}
      </div>
      </div>
    );
  }
}

export default Buy;
