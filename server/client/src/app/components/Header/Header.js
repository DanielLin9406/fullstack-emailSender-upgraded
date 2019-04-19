import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Payments from '../Payments/Container';

const List = styled.li`
  margin:0 5px;
`

class Header extends Component{
  componentDidMount(){
    this.props.asyncFetchUser();
  }

  renderContent(){
    switch(this.props.user){
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <List key="1"><Payments /></List>,
          ( this.props.user ? 
            <List key="3">
              Credits: {this.props.user.credits}
            </List> : ''           
          ),
          <List key="2"><a href="/api/logout">Logout</a></List>
        ]
    }
  }

  render(){
    return (
      <nav> 
        <div className="nav-wrapper">
          <Link 
            to={this.props.user ? '/surveys' : '/'} 
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}
export default hot(module)(Header);
