import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Payments from '@app/components/Payments/Container';
import AuthContext from '../../layout/auth/AuthContext';

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

function Header() {
  const {
    authenticated,
    initialized,
    user,
    dispatch,
    createAsyncInitAuthUser,
    createAsyncHandleLogout
  } = useContext(AuthContext);
  const asyncInitAuthUser = createAsyncInitAuthUser(dispatch);
  const asyncHandleLogout = createAsyncHandleLogout(dispatch);

  useEffect(() => {
    const fetchData = async () => {
      await asyncInitAuthUser();
    };
    if (!initialized) fetchData();
  }, []);

  const handleLogout = async () => {
    await asyncHandleLogout();
  };

  const renderContent = () => {
    switch (authenticated) {
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
          authenticated ? <List key="2">Credits: {user.credits}</List> : '',
          <List key="3">
            <Button onClick={() => handleLogout()}>Logout</Button>
          </List>
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
}

export default Header;
