import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" style={{ display: "inline-block" }}>
      <svg
        width="180"
        height="50"
        viewBox="0 0 180 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
      >
        {/* i წერტილით, როგორც პატარა წრე */}
        <path
          d="M15 10 L15 40"
          stroke="#f39c12"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="15" cy="7" r="4" fill="#f39c12" />

        {/* ტექსტი "Score.ge" ერთად */}
        <text
          x="30"
          y="35"
          fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          fontWeight="700"
          fontSize="32"
          fill="#f39c12"
          style={{ userSelect: "none" }}
        >
          Score.ge
        </text>
      </svg>
    </Link>
  );
}

export default Logo;
