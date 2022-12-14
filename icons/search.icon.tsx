

import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m15.805 14.862-4.55-4.55a6.302 6.302 0 0 0 1.411-3.979A6.34 6.34 0 0 0 6.333 0 6.34 6.34 0 0 0 0 6.333a6.34 6.34 0 0 0 6.333 6.334c1.507 0 2.89-.531 3.979-1.412l4.55 4.55a.665.665 0 0 0 .943 0 .666.666 0 0 0 0-.943Zm-9.472-3.529c-2.757 0-5-2.242-5-5 0-2.757 2.243-5 5-5 2.758 0 5 2.243 5 5 0 2.758-2.242 5-5 5Z"
      fill="#313234"
    />
  </Svg>
)

export {SearchIcon};
