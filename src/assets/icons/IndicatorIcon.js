import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IndicatorIcon({active}) {
  return (
    <Svg
      width={4}
      height={40}
      viewBox="0 0 4 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 0a4 4 0 014 4v32a4 4 0 01-4 4V0z"
        fill={active ? '#007FF4' : '#A7B4C0'}
      />
    </Svg>
  );
}

export default IndicatorIcon;
