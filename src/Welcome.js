import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';


function roomIdGenerator() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return "/room/"+text;
}

export class Welcome extends Component {
  render(){
    return(
        <Jumbotron align="middle" className="bsStyle">
          <h1>let's Code</h1><br/>
          <p>This is a simple code play ground that allows you to share code in real time.</p><br/><br/>
          <Link to={roomIdGenerator()}><Button bsStyle="default" bsSize="large">Code</Button></Link>
        </Jumbotron>
    );
  }
}
