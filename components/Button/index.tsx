import React from "react";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";
import Text from "../Text";

interface PropsButton extends TouchableOpacityProps {
  title: string;
  margin?: string;
  color?: string;
}

export default function Button({
  color,
  title,
  margin,
  ...props
}: PropsButton) {
  return (
    <S.ContainerButton {...props} margin={margin}>
      <Text color={color} size="BUTTON" family="Bold">
        {title}
      </Text>
    </S.ContainerButton>
  );
}
