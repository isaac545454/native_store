import { SafeAreaView } from "react-native";
import Login from "./screen/login";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_200ExtraLight,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  console.log(fontsLoaded);

  if (!fontsLoaded) {
    return <SafeAreaView></SafeAreaView>;
  }

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}
