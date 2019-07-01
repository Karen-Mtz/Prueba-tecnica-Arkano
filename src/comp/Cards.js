import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase";
import CardGroup from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card'

class Cards extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("dashboard");
    this.unsubscribe = null;
    this.state = {
      coments: []
    };
  }
  onCollectionUpdate = querySnapshot => {
    const coments = [];
    querySnapshot.forEach(doc => {
      const { name, quantity, increase, users, visits, date } = doc.data();
      coments.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        quantity,
        increase,
        users,
        visits,
        date
      });
    });
    this.setState({
      coments
    });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      // <Dash />
      <div >
        <div >
          <div className="d-inline">
                {this.state.coments.map(Coment => (
                  <div>
                    <br/>
                    <br/>
                    <Card text="white" style={{ width: '7rem', height: '6rem', backgroundColor: '#00BFEE', display: 'inline-flex',
    margin: '0.5%' }}>
                      <Card.Body>
                        <Card.Title style={{ fontSize: '18px', fontWeight: '600' }}>{Coment.quantity}</Card.Title>
                        <Card.Text style={{ fontSize: '9px' }}>
                          Nuevas compras
                          <br />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card text="white" style={{ width: '7rem', height: '6rem', backgroundColor: '#00A65A' , display: 'inline-flex',
    margin: '0.5%' }}>
                      <Card.Body>
                        <Card.Title style={{ fontSize: '16px', fontWeight: '600' }}>{Coment.increase}</Card.Title>
                        <Card.Text style={{ fontSize: '8px' }}>
                          Incremento de compras
                          <br />
                        </Card.Text>
                      </Card.Body>
                    </Card>                    
                    <Card text="white" style={{ width: '7rem', height: '6rem', backgroundColor: '#F39C12', display: 'inline-flex',
    margin: '0,5%'}}>
                      <Card.Body>
                        <Card.Title style={{ fontSize: '18px', fontWeight: '600' }}>{Coment.users}</Card.Title>
                        <Card.Text style={{ fontSize: '9px' }}>
                          Nuevos usuarios
                          <br />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card text="white" style={{ width: '7rem', height: '6rem', backgroundColor: '#DC4A38', display: 'inline-flex',
    margin: '1%' }}>
                      <Card.Body>
                        <Card.Title style={{ fontSize: '18px', fontWeight: '600' }}>{Coment.visits}</Card.Title>
                        <Card.Text style={{ fontSize: '9px' }}>
                          Nuevas visitas
                          <br />
                        </Card.Text>
                      </Card.Body>
                    </Card>

                     <br/>
                     <br/>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
