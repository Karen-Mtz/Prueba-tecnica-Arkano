import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

export default class Dasboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Coment: {},
          key: ''
        };
    }
    componentDidMount() {
        const ref = 
        firebase.firestore.CollectionReference('dashboard').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if(doc.exists) {
                this.setState({
                    Coment: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log('No such document');
            }
        });
    }
    render() {
        return (
            <div>
                <h3>
                    {this.state.Coment.name}
                </h3>
                <p>{this.state.Coment.quantity}</p>
            </div>
        );
    }
}
