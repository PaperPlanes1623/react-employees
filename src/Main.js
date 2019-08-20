import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import EditForm from './components/employee/EditForm';

const Main = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/edit" component={EditForm} />
    </Switch>
  </Fragment>
)

export default Main;