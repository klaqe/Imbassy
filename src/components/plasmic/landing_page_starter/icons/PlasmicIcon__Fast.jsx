// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function FastIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16 1.2c-1 0-1.8.8-1.8 1.8S15 4.8 16 4.8 17.8 4 17.8 3 17 1.2 16 1.2m-3.6 2.9c-.47 0-.9.19-1.2.5L7.5 8.29C7.19 8.6 7 9 7 9.5c0 .63.33 1.16.85 1.47L11.2 13v5H13v-6.5l-2.25-1.65 2.32-2.35L14.8 10H19V8.2h-3.2l-1.94-3.27c-.29-.5-.86-.83-1.46-.83M10 3H3c-.55 0-1-.45-1-1s.45-1 1-1h9.79c-.21.34-.38.71-.47 1.11-.86.02-1.67.34-2.32.89m-5 9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5M19 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5M5.32 11H1c-.552 0-1-.45-1-1s.448-1 1-1h4.05c-.02.16-.05.33-.05.5 0 .53.12 1.04.32 1.5M6 7H2c-.55 0-1-.45-1-1s.45-1 1-1h5.97L6.09 6.87C6.05 6.91 6 6.96 6 7z"
        }
      ></path>
    </svg>
  )
}

export default FastIcon
/* prettier-ignore-end */
