import React from "react";
import { TextProps as TextPropsNative } from "react-native";
import * as S from "./style";

interface TextProps extends TextPropsNative {
  color?: string;
  size?: "DEFAULT" | "TITLE" | "PARAGRAPH" | "SUBTITLE" | "BUTTON";
  family?: "Bold" | "regular" | "ligth";
}

export default function Text({ family, size, color, ...props }: TextProps) {
  const handleSize = {
    TITLE: "24px",
    SUBTITLE: "20px",
    PARAGRAPH: "14px",
    BUTTON: "18px",
    DEFAULT: "16px",
  };

  const fonts = {
    Bold: "Poppins_600SemiBold",
    regular: "Poppins_400Regular",
    ligth: "Poppins_200ExtraLight",
  };

  return (
    <S.ContainerText
      size={handleSize[!size ? "TITLE" : size]}
      style={{ fontFamily: fonts[!family ? "regular" : family] }}
      {...props}
      color={color}
    ></S.ContainerText>
  );
}
