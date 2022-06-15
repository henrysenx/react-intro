import React from "react";
import Header from "./Header";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
