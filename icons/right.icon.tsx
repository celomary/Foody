import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const RightArrowIcon: React.FC<
{
    isSelected: boolean;
}> = ({isSelected}) => (
  <Svg
    width={8}
    height={8}
    fill="none"
  >
    <Path
      d="M6.331 3.538 2.983.195A.61.61 0 0 0 2.521 0a.61.61 0 0 0-.462.195L1.67.58a.629.629 0 0 0-.19.462c0 .178.063.334.19.468L4.164 4 1.67 6.496a.629.629 0 0 0-.19.462c0 .178.063.333.19.467l.39.385a.63.63 0 0 0 .462.19.629.629 0 0 0 .462-.19l3.348-3.343A.657.657 0 0 0 6.521 4a.629.629 0 0 0-.19-.462Z"
      fill={
        isSelected ? "#000": "#fff"
      }
    />
  </Svg>
)

