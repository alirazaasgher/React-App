import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from "../src/componments/AdminHeader";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../src/componments/css/animate.min.css";
import "../src/componments/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "../src/componments/css/demo.css";
import "../src/componments/css/pe-icon-7-stroke.css";
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <Switch>
    <Route path="/admin" render={props => <AdminLayout {...props} />} />
    <Redirect from="/" to="/admin/dashboard" />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
