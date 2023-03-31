import React from "react";
import { Cater } from "./cater";
import "../Section1/section.css";
import { Truck } from "./truck";
export default function Section4() {
    return (
      <div className="gradient3">
        <div className="top-section flex items-center justify-center text-center">
          <h1>EZ EATZ</h1>
        </div>
        <Cater />
        <Truck />
      </div>
    );
  }