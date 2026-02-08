import React from 'react';
import Login from './Login';

const HOC = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isAuthenticated = false; // change to false to test

    if (!isAuthenticated) {
      return <Login />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default HOC;

// Dashboard
import React from 'react';
import HOC from './HOC';

const Dashboard = () => {
  return <h3>Dashboard</h3>;
};

export default HOC(Dashboard);

