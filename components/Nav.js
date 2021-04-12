import React, { useState, useEffect } from "react";

import Image from "next/image";
import styled from "styled-components";
// import myLogo from "../public/images/zillow.png";
// import myAvatar from "../public/images/avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <Navigation>
      <NavigationContents>
        <Wrap>
          <ImageLogo src="/zillow.png" width={500} height={500} />

          <ImageAvatar src="/avatar.png" width={500} height={500} />
        </Wrap>
      </NavigationContents>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;

  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const NavigationContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  position: absolute;
  left: 10%;
  top: 10%;
  width: 50%;
`;

const ImageLogo = styled(Image)`
  position: fixed;
  top: 10px;
  left: 0;
  width: 80px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
`;

const ImageAvatar = styled(Image)`
  cursor: pointer;
  position: fixed;
  right: 20px;
  width: 30px;
  height: 30px;
`;
