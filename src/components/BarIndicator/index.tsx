import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';

import * as S from './styles';

const BarIndicator: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;

  const progress = () => {
    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start(({ finished }) => {
      if (finished) {
        console.log('finished');
      }
    });
  };

  useEffect(() => {
    progress();
    progressAnim.addListener((v) => {
      setPercentage(Math.round(v.value));
    });
  });

  return (
    <S.Bar>
      <S.Filler
        style={{
          width: progressAnim.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
        }}
      >
        <S.Percentage>{`${String(percentage)}%`}</S.Percentage>
        <S.Handle />
      </S.Filler>
    </S.Bar>
  );
}

export default BarIndicator;
