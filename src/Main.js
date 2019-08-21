import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import EmployeeForm from './components/employee/EmployeeForm';

const Main = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/edit" component={EmployeeForm} />
    </Switch>
  </Fragment>
)

export default Main;