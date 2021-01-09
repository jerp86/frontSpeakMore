import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SpeakMore from '../pages/SpeakMore';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/speakmore" component={SpeakMore} />
  </Switch>
);

export default Routes;
