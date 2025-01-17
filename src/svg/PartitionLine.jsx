import * as React from "react";
const PartitionLine = (props) => (
  <svg
    width={32}
    height={1}
    viewBox="0 0 32 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      x1={0.5}
      y1={0.5}
      x2={31.5}
      y2={0.5}
      stroke="url(#paint0_linear_64_31122)"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_64_31122"
        x1={0}
        y1={1.5}
        x2={32}
        y2={1.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#929292" />
        <stop offset={0.5} stopColor="#F8F8F8" />
        <stop offset={1} stopColor="#929292" />
      </linearGradient>
    </defs>
  </svg>
);
export default PartitionLine;
