import React, { Component } from "react";
import firebase from "../Firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("dashboard");
    this.state = {
      name: "",
      quantity: "",
      increase: "",
      users: "",
      visits: "",
      date: ""
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, quantity, increase, users, visits, date } = this.state;
    this.ref
      .add({
        name,
        quantity,
        increase,
        users,
        visits,
        date
      })
      .then(docRef => {
        this.setState({
          name: "",
          quantity: "",
          increase: "",
          users: "",
          visits: "",
          date: ""
        });
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { name, quantity, increase, users, visits, date } = this.state;
    if(window.location.pathname === "/") {
    return (
      <div class="container">
        
        <Form onSubmit={this.onSubmit}>
          <Form.Group size="sm" controlId="formBasicEmail">
            <Form.Label>dashboard name</Form.Label>
            <h6>Nombre del dashboard</h6>
            <input
              type="text"
              class="form-control"
              name="name"
              value={name}
              onChange={this.onChange}
              placeholder="Nombre del dashboard"
            />
            <br />
            <h6>Cantidad de nuevas compras</h6>
            <input
              type="number"
              class="form-control"
              name="quantity"
              value={quantity}
              onChange={this.onChange}
              placeholder="Nuevas compras"
            />
            <br />
            <h6>Incremento de compras</h6>
            <input
              type="number"
              class="form-control"
              name="increase"
              value={increase}
              onChange={this.onChange}
              placeholder="% incremento de compras"
            />
            <br />
            <h6>Cantidad de nuevos usuarios</h6>
            <input
              type="number"
              class="form-control"
              name="users"
              value={users}
              onChange={this.onChange}
              placeholder="Nuevos usuarios"
            />
            <br />
            <h6>Cantidad de nuevas visitas</h6>
            <input
              type="number"
              class="form-control"
              name="visits"
              value={visits}
              onChange={this.onChange}
              placeholder="Nuevas visitas"
            />
            <br />
            <h6>Fecha</h6>
            <input
              type="date"
              class="form-control"
              name="date"
              value={date}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button className="sbmt" variant="primary" type="submit">
            Ingresar datos
          </Button>
        </Form>
      </div>
    );
  } else {
    return null
  }
  }
}

export default Create;
