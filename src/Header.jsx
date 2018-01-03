import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SharePopUp from "./SharePopUp.jsx"


export default class Header  extends React.Component {
  render() {
    console.log("Rendering <Header/>");

    let links;
    const roomURL = this.props.match.url

    if (roomURL.indexOf("/room") >= 0) {
      links = (
        <ul className="nav navbar-nav navbar-right">
          <li> <SharePopUp roomURL = {roomURL}/></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )

    } else{
      links = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )
    }

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">letsCode</a>
          </div>
          <div>
            {links}
          </div>
        </div>
      </nav>
    );
  }
}
