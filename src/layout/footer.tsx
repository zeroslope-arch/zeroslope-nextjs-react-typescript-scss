import React from "react";
import packageJson from "../../package.json"

const Footer = () => {
  return (
    <footer className="text-center text-muted m-4">
        <hr />
        <a href="https://github.com/cfryerdev/open-alignments" target="blank" className="text-muted ml-1 mr-1">
            <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a href="https://twitter.com/cfryerdev" target="blank" className="text-muted ml-1 mr-1">
            <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href={`mailto:${packageJson.email}`} target="blank" className="text-muted ml-1 mr-1">
            <i className="fas fa-envelope-square fa-2x"></i>
        </a>
        <br />
        <small className="text-muted version">cfryerdev © 2021. All rights reserved.</small>
        <br />
        <small className="text-muted version">Version: {packageJson.version} - <a href="/api-docs" target="_blank">OpenAPI</a></small>
      </footer>
  );
};

export default Footer;
