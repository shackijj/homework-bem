import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Content from 'e:Content';
import Header from 'e:Header';
import 'b:YSText';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Header/>
        <Content/>
      </Fragment>
    );
  }
});
