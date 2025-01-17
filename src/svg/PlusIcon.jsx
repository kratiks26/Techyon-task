import * as React from "react";
const PlusIcon = (props) => (
  <svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_64_31112)">
      <rect
        x={5}
        y={4}
        width={32}
        height={32}
        rx={16}
        fill="white"
        fillOpacity={0.25}
        shapeRendering="crispEdges"
      />
      <rect
        x={5.25}
        y={4.25}
        width={31.5}
        height={31.5}
        rx={15.75}
        stroke="url(#paint0_linear_64_31112)"
        strokeWidth={0.5}
        shapeRendering="crispEdges"
      />
      <path
        d="M19.65 21.35H13.35C12.9675 21.35 12.6469 21.2214 12.3881 20.9641C12.1294 20.7069 12 20.3881 12 20.0079C12 19.6276 12.1294 19.3062 12.3881 19.0437C12.6469 18.7812 12.9675 18.65 13.35 18.65H19.65V12.35C19.65 11.9675 19.7786 11.6469 20.0359 11.3881C20.2931 11.1294 20.6119 11 20.9921 11C21.3724 11 21.6937 11.1294 21.9563 11.3881C22.2188 11.6469 22.35 11.9675 22.35 12.35V18.65H28.65C29.0325 18.65 29.3531 18.7786 29.6119 19.0359C29.8706 19.2931 30 19.6119 30 19.9921C30 20.3724 29.8706 20.6937 29.6119 20.9563C29.3531 21.2188 29.0325 21.35 28.65 21.35H22.35V27.65C22.35 28.0325 22.2214 28.3531 21.9641 28.6119C21.7069 28.8706 21.3881 29 21.0079 29C20.6276 29 20.3062 28.8706 20.0437 28.6119C19.7812 28.3531 19.65 28.0325 19.65 27.65V21.35Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_64_31112"
        x={0}
        y={0}
        width={42}
        height={42}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_64_31112"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_64_31112"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_64_31112"
        x1={5}
        y1={4}
        x2={37}
        y2={36}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.5} stopColor="#999999" />
        <stop offset={1} stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);
export default PlusIcon;
