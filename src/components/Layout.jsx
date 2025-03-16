import React from "react";
import Nav from "./Nav";

const Layout = ({ children, sectionId = "resource-content", className = "" }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={className}>
        <section id={sectionId}>
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
