import React from "react";

import Wrapper from "./Wrapper";

const LeftMenuFooter = () => (
  <Wrapper>
    <div className="poweredBy">
      Powered by{" "}
      <a
        key="website"
        href="https://eduhdev.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        EduhDev
      </a>
    </div>
  </Wrapper>
);

export default LeftMenuFooter;
