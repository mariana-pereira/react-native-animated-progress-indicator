import styled from 'styled-components/native';

export const Container = styled.View``;

interface CircleProps {
  width: number;
  height: number;
  borderRadius: number;
  color: string;
  left?: number;
  top?: number;
}

interface TextProps {
  left: number;
  top: number;
}

export const Outer = styled.View<CircleProps>`
  overflow: hidden;

  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => `${props.borderRadius}px`};
  background-color: ${(props) => props.color};
`;

export const Inner = styled.View<CircleProps>`
  position: absolute;
  background-color: #ddd;
  z-index: 2;

  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => `${props.borderRadius}px`};
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  background-color: ${(props) => props.color};
`;

export const Text = styled.Text<TextProps>`
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  font-family: 'Roboto-Bold';
  font-size: 14px;
  line-height: 16px;
  color: #0035ac;
`;
