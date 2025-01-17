import * as React from "react";
const DownArrow = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.6} clipPath="url(#clip0_1571_11143)">
      <g opacity={0.6}>
        <path
          d="M16.6 7.45825L11.1667 12.8916C10.525 13.5333 9.47502 13.5333 8.83336 12.8916L3.40002 7.45825"
          stroke="white"
          strokeWidth={1.66667}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1571_11143">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default DownArrow;
