// src/components/Layout.jsx
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section id="resource-content">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
