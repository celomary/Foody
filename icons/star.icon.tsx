import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const StarIcon = () => (
  <Svg
    width={10}
    height={10}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        d="m10 3.864-3.634-.24L4.998.188 3.63 3.625 0 3.864l2.784 2.363-.914 3.586 3.128-1.977 3.128 1.977-.914-3.586L10 3.864Z"
        fill="#313234"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

