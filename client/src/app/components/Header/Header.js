import React, { Component } from 'react';
import noop from 'lodash/noop';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import { oneOfType, func, bool, any } from 'prop-types';
import styled from 'styled-components';
import Payments from '@app/components/Payments/Container';

const List = styled.li`
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
`;

class Header extends Component {
  static propTypes = {
    asyncInitAuthUser: func,
    user: oneOfType([bool, any])
  };

  static defaultProps = {
    asyncInitAuthUser: noop
  };

  componentDidMount() {
    this.props.asyncInitAuthUser();
  }

  handleLogout() {
    this.props.asyncHandleLogout();
  }

  renderContent() {
    switch (this.props.authenticated) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <List key="1">
            <Payments />
          </List>,
          this.props.authenticated ? (
            <List key="3">Credits: {this.props.user.credits}</List>
          ) : (
            ''
          ),
          <List key="2">
            <Button onClick={() => this.handleLogout()}>Logout</Button>
          </List>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.user ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default hot(module)(Header);
