import React, { useEffect, useContext } from "react";
import { pathContext } from "./pathContext";

import ContactLink from "./contact-link";
import "../App.css";

const Contact = () => {
  const [path, Setpath] = useContext(pathContext);

  useEffect(() => {
    Setpath("/contact_me");
  });

  const getAscii = () => {
    let ascii = [
      " ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗    ███╗   ███╗███████╗",
      "██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝    ████╗ ████║██╔════╝",
      "██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║       ██╔████╔██║█████╗  ",
      "██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║       ██║╚██╔╝██║██╔══╝  ",
      "╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║       ██║ ╚═╝ ██║███████╗",
      " ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝       ╚═╝     ╚═╝╚══════╝"
    ].join("\n");
    return ascii;
  };

  return (
    <div className="contact-container">
      <div className="t" style={{ width: "100%" }}>
        <h1 className="about-text">::ssh me@forwork</h1>
      </div>
      <div className="ascii-art-top">
        <pre>
          <code>{getAscii()}</code>
        </pre>
      </div>
      <div className="contact-page-para">
        <p>
          Want to get in touch or hire me for work? you can reach out to me by{" "}
          <br />
          <br />
          sending a mail in
          <strong>
            <i>
              <a
                href="mailto:rudronil34@gmail.com"
                target="_top"
                className="mail-anchor"
              >
                'rudronil34@gmail.com'
              </a>
            </i>
          </strong>
        </p>
      </div>
      <div className="contact-page-para" style={{ width: "100%" }}>
        <p>--: or by these platforms :--</p>
      </div>
      <div className="contact-links-container">
        <ContactLink
          Name="GITHUB !"
          to="https://github.com/Wolfattackx"
          Icon="fab fa-github-alt"
        />
        <ContactLink
          Name="TWITTER #"
          to="https://twitter.com/Wolfattackx1"
          Icon="fab fa-twitter"
        />
        <ContactLink
          Name="LINKEDIN @"
          to="https://www.linkedin.com/in/rudranil-sarkar-150744159/"
          Icon="fab fa-linkedin"
        />
      </div>
    </div>
  );
};

export default Contact;
