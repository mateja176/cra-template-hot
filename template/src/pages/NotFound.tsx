import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const NotFound: React.FC<RouteComponentProps> = (props) => {
  return <div>Page "{props.location.pathname}" not found</div>;
};

export default NotFound;
