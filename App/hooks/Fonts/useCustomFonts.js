import { useFonts } from "expo-font";

export function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    Light: require("../../../theme/fonts/Assistant/Assistant-Light.ttf"),
    ExtraLight: require("../../../theme/fonts/Assistant/Assistant-ExtraLight.ttf"),
    Regular: require("../../../theme/fonts/Assistant/Assistant-Regular.ttf"),
    Medium: require("../../../theme/fonts/Assistant/Assistant-Medium.ttf"),
    Semibold: require("../../../theme/fonts/Assistant/Assistant-SemiBold.ttf"),
    Bold: require("../../../theme/fonts/Assistant/Assistant-Bold.ttf"),
  });

  return { fontsLoaded };
}
