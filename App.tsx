import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import style from "styled-components/native";

const ButtonRed = style.Text`
  color: red;
`;

export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ButtonRed>aaaaaaaaaa</ButtonRed>
    </View>
  );
}
