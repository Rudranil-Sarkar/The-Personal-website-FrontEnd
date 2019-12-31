import React from "react";

const ContactLink = ({ Icon, Name, to }) => {
  return (
    <div className="contact-link">
      <a href={to} target="_blank" rel="noopener noreferrer">
        <i className={Icon}></i>
        <h1>{Name}</h1>
      </a>
    </div>
  );
};

export default ContactLink;
