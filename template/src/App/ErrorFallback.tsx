import React from 'react';
import { ErrorBoundaryPropsWithComponent } from 'react-error-boundary';
import { Redirect } from 'react-router-dom';

const ErrorFallback: ErrorBoundaryPropsWithComponent['FallbackComponent'] = () => (
  <Redirect to="/" />
);

export default ErrorFallback;
