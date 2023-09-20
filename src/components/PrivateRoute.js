import { Navigate, Route } from 'react-router-dom';

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
