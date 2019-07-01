// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter, Switch} from 'react-router-dom'
// import './index.css';
// import App from './App';
// import Form from './components/Form';
// import Dashboard from './components/Dashboard';
// import Nav from './components/Nav';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Router>
//         <div>
//         <Route exact path='/' component={App} />
//         <Route path='/Form' component={Form} />
//         <Route path='/Dashboard' component={Dashboard} />
//         </div>
//     </Router>,
// document.getElementById('root')
// );

// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create'
import Show from './components/Show';
import Appcss from './App.css';
import Dash from './comp/Dash'
import {
BrowserRouter,
Switch,
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
    <div>
    {/* <Route exact path='/' component={App} />
    <Route path='/edit/:id' component={Edit} />
    <Route path='/create' component={Create} />
    <Route path='/show/:id' component={Show} /> */}
    <Dash />
    </div>
</Router>,
    document.getElementById('root')
    );
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();

    