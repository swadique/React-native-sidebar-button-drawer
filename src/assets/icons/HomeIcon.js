import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function HomeIcon({active}) {
  return (
    <Svg
      width={25}
      height={27}
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.81 24.844v-3.962c0-1.004.817-1.82 1.828-1.826h3.713c1.015 0 1.838.818 1.838 1.826v3.95c0 .87.708 1.578 1.585 1.585h2.533a4.469 4.469 0 003.156-1.291 4.405 4.405 0 001.308-3.13V10.743c0-.948-.424-1.848-1.157-2.457L15.01 1.454a4.024 4.024 0 00-5.112.092l-8.42 6.74A3.196 3.196 0 00.23 10.743v11.242c0 2.447 1.999 4.432 4.464 4.432h2.475a1.59 1.59 0 001.128-.457c.3-.295.468-.697.468-1.116h.047z"
        fill={active ? '#007FF4' : '#A7B4C0'}
      />
    </Svg>
  );
}

export default HomeIcon;
