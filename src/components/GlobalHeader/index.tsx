import { Label } from "@global/styles/global";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Props } from "./props";
import { ButtonHeader, Container, HeaderContent, IconHeader } from "./styles";

export function GlobalHeader({
  title = "Mais Components",
  color,
  background,
  statusBarBackground,
  minHeight = 70,
  iconLeft = "chevron-back-outline",
  iconRight = "chevron-forward-outline",
  onPressLeft = undefined,
  onPressRight = undefined,
  children,
}: Props) {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={
          statusBarBackground ? statusBarBackground : theme.colors.primary800
        }
        translucent
        barStyle="light-content"
      />
      <Container
        background={background ? background : theme.colors.primary800}
        minHeight={minHeight}
      >
        <HeaderContent>
          <ButtonHeader
            alignItems="flex-start"
            disabled={!onPressLeft}
            onPress={onPressLeft}
          >
            {onPressLeft && (
              <IconHeader
                name={iconLeft}
                color={color ? color : theme.colors.gray100}
              />
            )}
          </ButtonHeader>
          <Label weight="bold">{title}</Label>
          <ButtonHeader
            alignItems="flex-end"
            disabled={!onPressRight}
            onPress={onPressRight}
          >
            {onPressRight && (
              <IconHeader
                name={iconRight}
                color={color ? color : theme.colors.gray100}
              />
            )}
          </ButtonHeader>
        </HeaderContent>
        {children}
      </Container>
    </>
  );
}
