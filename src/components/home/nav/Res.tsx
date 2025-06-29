"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Mobile from "./Mobile";

export default function Res() {
  const [showNav, setShowNav] = useState(false);
  const shownavHandle = () => setShowNav(true);
  const closeShownav = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={shownavHandle}></Navbar>
      <Mobile showNav={showNav} closeNav={closeShownav}></Mobile>
    </div>
  );
}
