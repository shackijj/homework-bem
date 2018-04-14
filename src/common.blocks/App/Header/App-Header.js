import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';
import logoPng from '../Logo/App-Logo.png';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Bem elem="Logo" tag="img" src={logoPng} alt="logo"/>
      </Fragment>
    );
  }
});
