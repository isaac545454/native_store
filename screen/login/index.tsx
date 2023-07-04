import { View } from "react-native";
import * as S from "./style";
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Text from "../../components/Text";

export default function Login() {
  const handleLogin = () => {
    alert("aaaaaaaaaa");
  };

  return (
    <View>
      <S.ContainerLogin>
        <Input />
        <Button
          title="ENTRAR"
          margin="8px"
          onPress={handleLogin}
          color="white"
        />
      </S.ContainerLogin>
    </View>
  );
}
