import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../../assets/logo.component.svg';

const Auth = (): React.ReactElement => (
  <>
    <Helmet>
      <title>Need For Drive - Авторизация</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Home page" />
    </Helmet>
    <div>
      <Logo />
    </div>
  </>
);

export default Auth;
