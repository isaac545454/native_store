import React from "react";
import { TextProps as TextPropsNative } from "react-native";
import * as S from "./style";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

interface TextProps extends TextPropsNative {
  color?: string;
  type?: "DEFAULT" | "TITLE";
}

export default function Text({ type, color, ...props }: TextProps) {
  const handleSize = {
    TITLE: "32px",
    DEFAULT: "16px",
  };

  return (
    <S.ContainerText
      size={handleSize[!type ? "DEFAULT" : type]}
      style={{ fontFamily: "Poppins_600SemiBold" }}
      {...props}
      color={color}
    >
      index
    </S.ContainerText>
  );
}
