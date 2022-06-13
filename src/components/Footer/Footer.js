import React from "react";

import { Card } from "reactstrap";

import "./Footer.css";

const Footer = ({ wrapped = true }) => (
  <div className={wrapped ? "container" : ""}>
    <Card body className="mb-4 mt-4 bg-light footer">
      <p className="m-0">
        cinnamon • Website by{" "}
        <a href="https://twitter.com/TheDestruc7i0n">TheDestruc7i0n</a>.
      </p>
      <small>
        <a href="https://github.com/isyuricunha/nani">Source Code on GitHub</a>
      </small>
    </Card>
  </div>
);

export default Footer;
