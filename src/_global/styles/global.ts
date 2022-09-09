import { Helper } from "@global/config/helpers";
import { Text as TextField, TextInput, View } from "react-native";
import styled, { css } from "styled-components/native";

export const theme = {
  colors: {
    primary: Helper.ENV === "production" ? "#7861F7" : "red",
    primaryAlt: Helper.ENV === "production" ? "#9BA1FD" : "#8257e5",
    secondary: Helper.ENV === "production" ? "#D5D6FA" : "#FFE5E1",
    text: "#262626",
    background: "#F2F2F7",
    backgroundPage: "#F2F2F7",
    gray: "#999999",
    lightGray: "#D9D9D9",
    middleGray: "#E4E4E4",
    darkGray: "#333333",
    white: "#ffffff",
    offWhite: "#f9f9f9",
    lightRed: "#FF76A7",
    green: "#00C48C",
    red: "#FF647C",
    backgroundIcon: "#E3E4E6",
    black: "#000000",
    backgroundChat: "#E6DDD6",
    backgroundChatMessageUser: "#e3fec7",
    backgroundChatReplyMessage: "rgba(0,0,0,0.1)",
  },

  font: {
    jfregular: "JosefinSans_400Regular",
    jfbold: "JosefinSans_700Bold",

    light: "Montserrat_300Light",
    regular: "Montserrat_400Regular",
    medium: "Montserrat_500Medium",
    bold: "Montserrat_700Bold",
    black: "Montserrat_700Bold",
  },

  size: {
    h1: "30px",
    h2: "26px",
    h3: "22px",
    h4: "20px",
    h5: "18px",
    p: "16px",
    label: "14px",
    small: "12px",
    xsmall: "10px",
  },
};

export const Text = styled(TextField)<{
  size?: keyof typeof theme.size;
  weight?: keyof typeof theme.font;
  color?: keyof typeof theme.colors;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
}>`
  ${({
    size,
    weight,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    lineHeight,
  }) => css`
    font-size: ${theme.size[size ?? "label"]};
    font-family: ${theme.font[weight ?? "regular"]};
    color: ${theme.colors[color ?? "darkGray"]};
    margin-top: ${marginTop ?? 0}px;
    margin-bottom: ${marginBottom ?? 0}px;
    margin-left: ${marginLeft ?? 0}px;
    margin-right: ${marginRight ?? 0}px;
    ${lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
  `}
`;

// DEFAUT INPUT
export const DefaultInput = styled(TextInput)`
  font-size: ${16}px;
  font-family: ${theme.font["regular"]};
  color: ${theme.colors["gray"]};
`;

export const Separator = styled(View)<{
  height?: number;
  borderBottomWidth?: number;
  borderBottomColor?: keyof typeof theme.colors;
  marginTop?: number;
  marginBottom?: number;
}>`
  ${({
    height,
    borderBottomWidth,
    borderBottomColor,
    theme,
    marginTop,
    marginBottom,
  }) => css`
    height: ${height ?? 0}px;
    border-bottom-width: ${borderBottomWidth ?? 0}px;
    border-bottom-color: ${theme.colors[borderBottomColor ?? "gray"]};
    margin-top: ${marginTop ?? 0}px;
    margin-bottom: ${marginBottom ?? 0}px;
  `}
`;
