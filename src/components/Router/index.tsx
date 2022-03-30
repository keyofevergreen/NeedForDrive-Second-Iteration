import React, { ReactNode, useLayoutEffect, useState } from 'react';
import { History } from 'history';
import { Router as BaseRouter } from 'react-router-dom';

interface RouterProps {
  basename?: string;
  children: ReactNode;
  history: History;
}

// eslint-disable-next-line import/prefer-default-export
export const Router = ({
  basename,
  children,
  history,
}: RouterProps): React.ReactElement => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <BaseRouter
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </BaseRouter>
  );
};

Router.defaultProps = {
  basename: '/',
};
