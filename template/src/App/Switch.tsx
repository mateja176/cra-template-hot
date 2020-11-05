import React from 'react';
import { Path, Switch, SwitchProps } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import routes from '../utils/routes/routes';

const Switch: React.FC<SwitchProps> = () => {
  return (
    <Switch>
      <Path to={routes.path} exact component={Home} />
      <Path component={NotFound} />
    </Switch>
  );
};

export default Switch;
