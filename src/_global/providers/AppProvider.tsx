import { theme } from "@global/styles/global";
import React, { ReactNode } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>{children}</NavigationContainer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </>
  );
};
