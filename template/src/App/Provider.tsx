import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserProvider } from 'react-router-dom';
import ErrorFallback from './ErrorFallback';

const Provider: React.FC = (props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={console.error}>
      <BrowserProvider>{props.children}</BrowserProvider>
    </ErrorBoundary>
  );
};

export default Provider;
