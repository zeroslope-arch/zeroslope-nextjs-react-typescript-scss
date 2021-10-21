import React, { useContext } from "react";
import Link from "next/link";
import Image from 'next/image';
import Toggle from "../components/toggle";
import { ThemeContext } from "../contexts/theme-context";

const Header = () => {
  const context = useContext(ThemeContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-3">
      <span className="navbar-brand">
        Ref-NextJS
      </span>
      <span style={{position: 'absolute', right: 10, top: 10 }}>
        <Toggle
          disabled={false}
          icons={{
            checked: <i className="fas fa-sun" style={{ marginTop: -1, marginLeft: 0 }}></i>, 
            unchecked: <i className="fas fa-moon" style={{ marginTop: -1 }}></i>
          }}
          defaultChecked={context.isLight}
          onChange={(checked) => {
            context.toggleDarkMode(checked)
          }}
        />
      </span>
    </nav>
  );
};

export default Header;
