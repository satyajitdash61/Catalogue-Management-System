import React, { Component } from "react";
import './ProductDetails.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
class ProductDetails extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            brand:"",   
            category:"",
            parent:"",
            breadcrumb:"",
            specifications:""
        }
    
    }
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    handleSubmit = event => {
        // event.preventDefault();
        const { name,brand,category,parent,breadcrumb,specifications}=this.state;
        
        axios
        .post("http://localhost:8300/product/productinfo", {name,brand,category,parent,breadcrumb,specifications})
        .then(response => {
            alert("Submitted Successfully")
            
        })
        .catch( err => {
            console.log(err);
            
        })
    }
  render() {
      const { name,brand,category,parent,breadcrumb,specifications}=this.state;
    return (
      <div id="form">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={this.handelChange} name="name" value={name} placeholder="Product Name" required/>
          </Form.Group>

          <Form.Group controlId="formBasicBrand">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" onChange={this.handelChange} name="brand" value={brand} placeholder="Brand" required/>
          </Form.Group>

          <Form.Group controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" onChange={this.handelChange} name="category" value={category} placeholder="Category" required/>
          </Form.Group>

          <Form.Group controlId="formBasicParentCategory">
            <Form.Label>Parent Category</Form.Label>
            <Form.Control type="text" onChange={this.handelChange} name="parent" value={parent} placeholder="Parent Category" required/>
          </Form.Group>

          <Form.Group controlId="formBasicBreadcrumb:">
            <Form.Label>Breadcrumb</Form.Label>
            <Form.Control type="text" onChange={this.handelChange} name="breadcrumb" value={breadcrumb} placeholder="Breadcrumb" required/>
          </Form.Group>

          <Form.Group controlId="formBasicSpecifications:">
            <Form.Label>Specifications</Form.Label>
            <Form.Control type="text" onChange={this.handelChange} name="specifications" value={specifications} placeholder="Specifications" />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ProductDetails;
