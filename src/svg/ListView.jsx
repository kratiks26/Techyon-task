import * as React from "react";
const ListView = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 5H19"
      stroke="#CCCCCC"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M5 19H19"
      stroke="#CCCCCC"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <rect
      x={5}
      y={9}
      width={14}
      height={6}
      stroke="#CCCCCC"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);
export default ListView;
