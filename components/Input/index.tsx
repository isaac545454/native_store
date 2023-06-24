import React from "react";
import * as S from "./style";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

export default function Input({ ...props }: InputProps) {
  return <S.ContainerInput {...props} />;
}
