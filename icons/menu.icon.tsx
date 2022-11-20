import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.75 7.5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5ZM23.25 11.25H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5ZM23.25 16.5h-15a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5Z"
      fill="#313234"
    />
  </Svg>
)

export {HomeIcon};
