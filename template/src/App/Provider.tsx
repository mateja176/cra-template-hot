import React from 'react';
import { BrowserProvider } from 'react-router-dom';

const Provider: React.FC = (props) => {
  return <BrowserProvider>{props.children}</BrowserProvider>;
};

export default Provider;
