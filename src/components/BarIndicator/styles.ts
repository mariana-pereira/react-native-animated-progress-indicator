import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Card = styled.View`
  background-color: #fff;
  width: 320px;
  height: 260px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 32px;
  line-height: 37px;
  color: #0038a8;
`;

export const TextThin = styled.Text``;

export const TextBold = styled.Text``;

export const Bar = styled.View`
  position: relative;
  width: 100%;
  height: 7px;
  background: #00cfc5;
  border-radius: 15px;
  margin: 76px 0 23px;
`;

export const Filler = styled(Animated.View)`
  height: 100%;
  background: #0035ac;
  border-radius: 15px;
`;

export const Handle = styled.View`
  position: absolute;
  left: 95%;
  top: -3px;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 3px solid #0035ac;
  border-radius: 7px;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  line-height: 16px;
  color: #0038a8;
`;

export const Percentage = styled(Text)`
  position: absolute;
  left: 91%;
  top: -20px;
`;
