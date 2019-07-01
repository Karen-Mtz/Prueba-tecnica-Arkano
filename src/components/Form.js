import React, { Component } from 'react';
import ReactDome from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

export default class Form extends Component {
    constructor() {
        super();
        this.ref= firebase.firestore().collection('dashboard');
        this.state = {
            date:"",
            name: "",
            quantity: "",
            users: "",
            visits: "",
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { date, name, quantity, users, visits } = this.state;

        this.ref.add({
            date,
            name, 
            quantity,
            users,
            visits
        }).then((docRef) => {
            this.setState({
                date: '',
                name: "",
                quantity: "",
                users: "",
                visits: ""
            });
            this.props.history.push('/')
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    
    render() {
        const {date, name, quantity, users,visits} = this.state;
        console.log(this.state)
        return (
            <section>
                <h3>dashboard</h3>
                <form onSubmit={this.onSubmit}>
                    <label for="name">Nombre del dashboard</label>
                    <input type="text" value={name} 
                    onChange={this.onChange} placeholder="Nombre del dashboard" />
                    <label for="quantity">Incremento de compras</label>
                    <input type="number" value={quantity}
                    onChange={this.onChange} placeholder="Incremento de compras" />
                    <label for="users">Cantidad de usuarios nuevos</label>
                    <input type="number" value={users}
                    onChange={this.onChange} placeholder="Cantidad de usuarios nuevos" />
                    <label for="visits">"Cantidad de nuevas visitas"</label>
                    <input type="number" value={visits}
                    onChange={this.onChange} placeholder="Cantidad de nuevas visitas" />
                    <label for="date">Fecha de ingreso</label>
                    <input type="date" value={date}
                    onChange={this.onChange} />
                    <button type="submit">Ingresar datos</button>
                </form>
            </section>

        )
    }
}