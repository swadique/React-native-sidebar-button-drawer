import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CategoryIcon({active}) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        opacity={0.4}
        d="M20.764 2.583h4.374c1.811 0 3.279 1.48 3.279 3.307v4.41c0 1.827-1.468 3.307-3.28 3.307h-4.373c-1.811 0-3.279-1.48-3.279-3.307V5.89c0-1.827 1.468-3.307 3.28-3.307z"
        fill={active ? '#007FF4' : '#A7B4C0'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.862 2.583h4.374c1.811 0 3.279 1.48 3.279 3.307v4.41c0 1.827-1.468 3.307-3.28 3.307H5.863c-1.811 0-3.279-1.48-3.279-3.307V5.89c0-1.827 1.468-3.307 3.28-3.307zm0 14.81h4.374c1.811 0 3.279 1.48 3.279 3.307v4.41c0 1.825-1.468 3.307-3.28 3.307H5.863c-1.811 0-3.279-1.482-3.279-3.307V20.7c0-1.827 1.468-3.307 3.28-3.307zm19.276 0h-4.374c-1.811 0-3.279 1.48-3.279 3.307v4.41c0 1.825 1.468 3.307 3.28 3.307h4.373c1.811 0 3.279-1.482 3.279-3.307V20.7c0-1.827-1.468-3.307-3.28-3.307z"
        fill={active ? '#007FF4' : '#A7B4C0'}
      />
    </Svg>
  );
}

export default CategoryIcon;
