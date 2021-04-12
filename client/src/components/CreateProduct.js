/* eslint-disable no-useless-constructor */
import * as ReactBootStrap from "react-bootstrap";
import { Component } from "react";
import Input from "./Input";
// import getCookie from '../utils/cookie'

import UserContext from "../Context";

class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: "",
      imgURL: "",
      description: "",
      price: 0,
    };
  }
  static contextType = UserContext;
  changeModel = (event) => {
    this.setState({
      model: event.target.value,
    });
  };
  changeimgURL = (event) => {
    this.setState({
      imgURL: event.target.value,
    });
  };
  changeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  changePrace = (event) => {
    this.setState({
      price: event.target.value,
    });
  };
  hendleSubmit = async (event) => {
    event.preventDefault();
    const { model, imgURL, description, price } = this.state;

    try {
      const token = localStorage.getItem("userToken");
      console.log(token);

      const result = await fetch("http://localhost:5000/api/product/create", {
        method: "POST",
        body: JSON.stringify({
          model,
          imgURL,
          description,
          price,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await result.json();
      console.log(response);

      if (token) {
        this.props.history.push("/product");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { model, imgURL, description, price } = this.state;
    return (
      <ReactBootStrap.Container>
        <h1>Sell Your Mobile</h1>
        <ReactBootStrap.Form onSubmit={this.hendleSubmit} className="w-50 p-3">
          <Input
            id="model"
            label="Model"
            type="text"
            value={model}
            onChange={this.changeModel}
          />

          <Input
            id="imgURL"
            label="imgURL"
            type="text"
            value={imgURL}
            onChange={this.changeimgURL}
          />
          <Input
            id="description"
            label="description"
            type="text"
            value={description}
            onChange={this.changeDescription}
          />
          <Input
            id="price"
            label="Price"
            type="number"
            value={price}
            onChange={this.changePrace}
          />

          <ReactBootStrap.Button variant="primary" type="submit">
            Sell
          </ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Container>
    );
  }
}
export default CreateProduct;
