import * as React from "react";
const CloudStorage = (props) => (
  <svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_64_31115)">
      <path
        d="M5 9C5 6.23858 7.23858 4 10 4H32C34.7614 4 37 6.23858 37 9V31C37 33.7614 34.7614 36 32 36H10C7.23858 36 5 33.7614 5 31V9Z"
        fill="white"
        fillOpacity={0.25}
        shapeRendering="crispEdges"
      />
      <path
        d="M5.25 9C5.25 6.37665 7.37665 4.25 10 4.25H32C34.6234 4.25 36.75 6.37665 36.75 9V31C36.75 33.6234 34.6234 35.75 32 35.75H10C7.37665 35.75 5.25 33.6234 5.25 31V9Z"
        stroke="url(#paint0_linear_64_31115)"
        strokeWidth={0.5}
        shapeRendering="crispEdges"
      />
      <path
        d="M24.58 27.7C22.47 27.85 22.47 30.91 24.58 31.06H29.59C30.2 31.06 30.78 30.84 31.23 30.43C32.71 29.14 31.92 26.54 29.97 26.3C29.27 22.08 23.16 23.68 24.61 27.7"
        fill="white"
      />
      <path
        d="M24.58 27.7C22.47 27.85 22.47 30.91 24.58 31.06H29.59C30.2 31.06 30.78 30.84 31.23 30.43C32.71 29.14 31.92 26.54 29.97 26.3C29.27 22.08 23.16 23.68 24.61 27.7"
        fill="white"
      />
      <path
        d="M31 19.07V23.34C31 23.66 30.49 23.8 30.27 23.57C29.8 23.08 29.21 22.71 28.53 22.5C26.96 22.01 25.15 22.49 24.01 23.67C23.29 24.44 22.9 25.4 22.88 26.44C22.88 26.62 22.79 26.78 22.65 26.89C21.93 27.46 21.49 28.35 21.49 29.37V29.38C21.49 29.7 21.26 29.99 20.94 29.99H16.34C13.4 30 11 27.6 11 24.65V14.42C11 11.98 12.98 10 15.42 10H17.74C19.37 10 19.88 10.53 20.53 11.4L21.93 13.26C22.24 13.67 22.28 13.72 22.86 13.72H25.65C28.03 13.72 30.05 15.28 30.74 17.44C30.89 17.89 30.97 18.35 30.99 18.84C31 18.91 31 19 31 19.07Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_64_31115"
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
          result="effect1_dropShadow_64_31115"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_64_31115"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_64_31115"
        x1={5}
        y1={4}
        x2={37}
        y2={36}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.5} stopColor="#BEBEBE" />
        <stop offset={1} stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);
export default CloudStorage;
