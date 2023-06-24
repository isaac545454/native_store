import React from "react";
import * as S from "./style";
import { Text, TouchableOpacityProps } from "react-native";

interface PropsButton extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

export default function Button({ title, margin, ...props }: PropsButton) {
  return (
    <S.ContainerButton {...props} margin={margin}>
      <Text>{title}</Text>
    </S.ContainerButton>
  );
}
