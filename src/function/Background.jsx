import React from "react";
import bg1 from "./images/1.jpg";
import bg2 from "./images/2.jpg";
import bg3 from "./images/3.jpg";
import bg4 from "./images/4.jpg";
import bg5 from "./images/5.jpg";
import "./Background.css";

const bg = {
  1: bg1,
  2: bg2,
  3: bg3,
  4: bg4,
  5: bg5,
};

const genRandom = () => {
  const IMG_NUMBER = 5;
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number + 1;
};

const addStyle = (image) => {
  document.body.style.background = `url(${image}) no-repeat center center fixed`;
};

const Background = () => {
  const number = genRandom();
  addStyle(bg[number]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Jua"
        rel="stylesheet"
      />
    </>
  );
};

export default Background;
