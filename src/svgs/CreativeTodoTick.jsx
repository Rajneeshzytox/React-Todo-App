export default function CreativeTodoTick() {
  return (
    <>
      <svg
        width="654"
        height="654"
        viewBox="0 0 654 654"
        className="size-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 6" clipPath="url(#clip0_32_113)">
          <g id="creative todo tick">
            <path
              id="up"
              d="M261.754 434.394L118.095 353.461C154.047 291.216 233.408 269.514 296.031 304.804L439.629 385.724C403.699 447.958 324.363 469.666 261.754 434.394Z"
              fill="url(#paint0_linear_32_113)"
            />
            <path
              id="bottom"
              d="M439.655 386.792L601.461 115.761C539.156 79.7895 459.522 100.28 422.317 161.856L325.341 322.354L439.655 386.792Z"
              fill="url(#paint1_linear_32_113)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_32_113"
            x1="66.3082"
            y1="252.674"
            x2="399.663"
            y2="446.963"
            gradientUnits="userSpaceOnUse"
          >
            {/* 
            var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity))): 
                comes from on hovering the primary color in vs code  */}
            <stop style={{stopColor: "var(--fallback-s,oklch(var(--s)/0.5))"}} />
            <stop offset="0.716781" style={{stopColor: "var(--fallback-s,oklch(var(--s)/1))"}} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_32_113"
            x1="387.791"
            y1="391.7"
            x2="517.814"
            y2="123.136"
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{stopColor: "rgb(50,50,50)"}} />
            <stop offset="0.51" style={{stopColor: "var(--fallback-p,oklch(var(--p)/1))"}} />
            <stop offset="1" style={{stopColor: "var(--fallback-p,oklch(var(--p)/0.5))"}} />
          </linearGradient>
          <clipPath id="clip0_32_113">
            <rect width="654" height="654" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
