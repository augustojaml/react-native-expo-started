import { Text } from "@global/styles/global";
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
  iconRight = "funnel-outline",
  iconLeftSize,
  iconRightSize = 20,
  onPressLeft = () => {},
  onPressRight = undefined,
  children,
}: Props) {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={
          statusBarBackground ? statusBarBackground : theme.colors.primaryAlt
        }
        translucent
        barStyle="light-content"
      />
      <Container
        background={background ? background : theme.colors.primaryAlt}
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
                color={color ? color : theme.colors.white}
                style={{ fontSize: iconLeftSize ? iconLeftSize : 25 }}
              />
            )}
          </ButtonHeader>
          <Text weight="bold" color="white" size="label">
            {title}
          </Text>
          <ButtonHeader
            alignItems="flex-end"
            disabled={!onPressRight}
            onPress={onPressRight}
          >
            {onPressRight && (
              <IconHeader
                name={iconRight}
                color={color ? color : theme.colors.white}
                style={{ fontSize: iconRightSize ? iconRightSize : 25 }}
              />
            )}
          </ButtonHeader>
        </HeaderContent>
        {children}
      </Container>
    </>
  );
}
