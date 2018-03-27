import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../nav/nav';

const Layout = props => {
  return (
    <main className="layout">
      <div className="layout__top">
        <Nav />
      </div>
      <div className="layout__left">{props.children[0]}</div>
      <div className="layout__right">{props.children[1]}</div>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Layout;
