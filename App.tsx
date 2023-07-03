import { SafeAreaView } from "react-native";
import Login from "./screen/login";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as fonts from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
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
