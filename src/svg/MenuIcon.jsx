import * as React from "react";
const MenuIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_64_31228"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={40}
      height={40}
    >
      <rect width={40} height={40} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_64_31228)">
      <path
        d="M5 30V27.2221H35V30H5ZM5 21.3888V18.6112H35V21.3888H5ZM5 12.7779V10H35V12.7779H5Z"
        fill="white"
      />
    </g>
  </svg>
);
export default MenuIcon;