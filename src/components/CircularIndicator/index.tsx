/* eslint-disable no-shadow */
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

import * as S from './styles';

interface ProgressProps {
  backgroundColor?: string;
  color?: string;
  startDeg?: number;
  endDeg?: number;
  radius?: number;
  innerRadius?: number;
  innerBackgroundColor?: string;
}

interface CircleProps {
  backgroundColor: string | undefined;

  color1: string;
  zIndex1: number;
  rotate1: string;

  color2: string;
  zIndex2: number;
  rotate2: string;

  color3: string;
  zIndex3: number;
  rotate3: string;
}

const CircularIndicator: React.FC<ProgressProps> = ({
  backgroundColor = '#aaa',
  color = '#0035ac',
  startDeg = 0,
  endDeg = 360,
  radius = 100,
  innerRadius = 80,
  innerBackgroundColor = 'transparent',
}) => {
  const [percentage, setPercentage] = useState(0);

  const progressAnim = useRef(new Animated.Value(0)).current;

  const progress = useRef(() => {
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) {

      }
    });
  }).current;

  useEffect(() => {
    progress();
    progressAnim.addListener((v) => {
      setPercentage(Math.round(v.value * 100));
    });
  });

  const renderHalf = (color: string, transforms = [], otherStyle = {}) => {
    return (
      <Animated.View
        style={[
          styles.half,
          { backgroundColor: color, width: radius, height: radius * 2 },
          {
            transform: [
              { translateX: radius / 2 },
              ...transforms,
              { translateX: -radius / 2 },
            ],
          },
          otherStyle,
        ]}
      />
    );
  };

  const renderCircle = ({
    color1,
    zIndex1 = 0,
    rotate1,
    color2,
    zIndex2,
    rotate2,
    color3,
    zIndex3 = 0,
    rotate3,
  }: CircleProps) => {
    return (
      <S.Outer
        width={radius * 2}
        height={radius * 2}
        borderRadius={radius}
        color="#aaa"
      >
        {renderHalf(color1, [{ rotate: rotate1 }], { zIndex: zIndex1 })}
        {renderHalf(color2, [{ rotate: rotate2 }], { zIndex: zIndex2 })}
        {renderHalf(color3, [{ rotate: rotate3 }], { zIndex: zIndex3 })}
        <S.Inner
          width={innerRadius * 2}
          height={innerRadius * 2}
          borderRadius={innerRadius}
          left={radius - innerRadius}
          top={radius - innerRadius}
          color={innerBackgroundColor}
        >
          <S.Text left={innerRadius - 13} top={innerRadius - 8}>
              {percentage}%
            </S.Text>
        </S.Inner>
      </S.Outer>
    );
  };

  let color1;
  let color2;
  let color3;

  let zIndex2;

  let rotate1;
  let rotate2;
  let rotate3;

  if (startDeg <= 180 && endDeg <= 180) {
    rotate1 = '0deg';
    rotate2 = '180deg';
    rotate3 = progressAnim.interpolate({
      inputRange: LIST_TIMING_ANIMATION_INPUT_2_VALUE,
      outputRange: [`${180 + startDeg}deg`, `${180 + endDeg}deg`],
    });

    color1 = backgroundColor;
    color2 = color;
    color3 = backgroundColor;

    zIndex2 = 0;
  } else if (startDeg > 180 && endDeg > 180) {
    rotate1 = progressAnim.interpolate({
      inputRange: LIST_TIMING_ANIMATION_INPUT_2_VALUE,
      outputRange: [`${180 + startDeg}deg`, `${180 + endDeg}deg`],
    });
    rotate2 = '180deg';
    rotate3 = '180deg';

    color1 = backgroundColor;
    color2 = color;
    color3 = color;

    zIndex2 = 0;
  } else {
    const total = endDeg - startDeg;
    const part1 = 180 - startDeg;
    const listTimingAnimationInput = [
      0,
      part1 / total,
      part1 / total,
      part1 / total,
      1,
    ];

    rotate1 = '0deg';
    rotate2 = '180deg';
    rotate3 = progressAnim.interpolate({
      inputRange: listTimingAnimationInput,
      outputRange: [
        `${180 + startDeg}deg`,
        `${180 + 180}deg`,
        `${180 + 180}deg`,
        `${180 + 180}deg`,
        `${180 + endDeg}deg`,
      ],
    });

    color1 = progressAnim.interpolate({
      inputRange: listTimingAnimationInput,
      outputRange: [backgroundColor, backgroundColor, color, color, color],
    });

    color2 = color;
    color3 = backgroundColor;

    zIndex2 = progressAnim.interpolate({
      inputRange: listTimingAnimationInput,
      outputRange: [0, 0, 0, 1, 1],
    });
  }

  return renderCircle({
    color1,
    rotate1,
    color2,
    zIndex2,
    rotate2,
    color3,
    rotate3,
  });
};

const LIST_TIMING_ANIMATION_INPUT_2_VALUE = [0, 1];

const styles = StyleSheet.create({
  half: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default CircularIndicator;
