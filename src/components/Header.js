import React from "react";
import Quote from './Quote'
export default function Header() {
  return (
    <div className="header">
      <h1>BOARD OF SKATEBOARDS</h1>
      <Quote />
      <img
        src="https://media2.giphy.com/media/8jYbxR1QN6p68/200w.webp?cid=790b76115d32419e67425a662e6ff870&rid=200w.webp"
        alt="Jesus skates with me"
      />
    </div>
  );
}
