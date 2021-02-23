import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function ActivityIcon({active}) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.689 6.12a5.198 5.198 0 005.202 5.194c.316-.002.632-.032.942-.091v10.298c0 4.332-2.555 6.896-6.894 6.896h-9.45c-4.35 0-6.906-2.564-6.906-6.896v-9.436c0-4.332 2.556-6.918 6.906-6.918h10.29a4.937 4.937 0 00-.09.952zM16.985 19.24l3.692-4.763v-.023a.974.974 0 00-.182-1.35.944.944 0 00-1.34.194l-3.112 4.003-3.544-2.79a.955.955 0 00-1.352.181l-3.816 4.923a.93.93 0 00-.204.59.953.953 0 001.76.555l3.192-4.128 3.543 2.779a.955.955 0 001.363-.17z"
        fill={active ? '#007FF4' : '#A7B4C0'}
      />
      <Circle
        opacity={0.4}
        cx={25.188}
        cy={5.813}
        fill={active ? '#007FF4' : '#A7B4C0'}
        r={3.229}
      />
    </Svg>
  );
}

export default ActivityIcon;
