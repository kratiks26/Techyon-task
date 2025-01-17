import * as React from "react";
const Announcement = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.6}>
      <path
        d="M2 9.99979V13.9998C2 15.9998 5 16.9998 7 16.9998H8.43C8.8 16.9998 9.17 17.1098 9.49 17.2998L12.41 19.1298C14.93 20.7098 16 19.5598 16 16.5898V7.40979C16 4.42979 14.93 3.28979 12.41 4.86979L9.49 6.69979C9.17 6.88979 8.8 6.99979 8.43 6.99979H7C5 6.99979 2 7.99979 2 9.99979Z"
        stroke="white"
        strokeWidth={1.5}
      />
      <path
        d="M6.69824 16.6973L5.66297 20.561C5.52002 21.0944 5.83661 21.6428 6.37007 21.7857L7.336 22.0445C7.86946 22.1875 8.4178 21.8709 8.56074 21.3374L9.46661 17.9567"
        stroke="white"
        strokeWidth={1.5}
      />
      <path
        d="M19 8C20.78 10.37 20.78 13.63 19 16"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8301 5.5C23.7201 9.35 23.7201 14.65 20.8301 18.5"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default Announcement;