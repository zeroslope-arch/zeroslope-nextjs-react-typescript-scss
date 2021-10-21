import React, { useContext, Fragment } from "react";
import { ThemeContext } from "../contexts/theme-context";
import Header from "./header";
import Footer from "./footer";


const Layout = ({ children }) => {
  const context = useContext(ThemeContext);

  return (
    <div className={!context.isLight ? 'dark-mode' : ''}>
      <div className="main-panel">
        <Header />
        <div className="pt-2">
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
