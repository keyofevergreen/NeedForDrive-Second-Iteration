import React, { ReactNode } from 'react';
import { HashRouter as BaseRouter } from 'react-router-dom';

interface RouterProps {
  basename?: string;
  children: ReactNode;
}

export const Router = ({
  basename,
  children,
}: RouterProps): React.ReactElement => {
  return (
    <BaseRouter
      basename={basename}
    >
      {children}
    </BaseRouter>
  );
};

Router.defaultProps = {
  basename: '/',
};
