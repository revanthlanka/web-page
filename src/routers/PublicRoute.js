import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => ( // props -> history(instance of createBrowserHistory())
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.element.isRequired
};

export default connect(mapStateToProps)(PublicRoute);
