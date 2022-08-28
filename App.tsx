import React from "react";

import * as SplashScreen from "expo-splash-screen";

import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import { AppProvider } from "@global/providers/AppProvider";
import { AppRoutes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  SplashScreen.preventAutoHideAsync();

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
}
