import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const WhiteStarIcon = () => (
  <Svg
    width={12}
    height={12}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        d="M12 4.636 7.64 4.35 5.998.224 4.356 4.35 0 4.636l3.34 2.837-1.096 4.303 3.754-2.373 3.753 2.373-1.096-4.303L12 4.636Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);