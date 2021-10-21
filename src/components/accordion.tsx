import React, { useState } from "react";

export default ({ title, icon, children, defaultIsOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen || false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const chevIcon = () => (isOpen ? "fa-chevron-up" : "fa-chevron-down");
  return (
    <div className="accordion mb-2">
      <div className="accordion-header" onClick={toggleOpen}>
        {icon && <i className={icon}></i>}
        {title}
        <span className="float-right">
          <i className={`fas ${chevIcon()} accordion-chev`}></i>
        </span>
      </div>
      <div className={`accordion-container ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};
