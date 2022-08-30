import Ionicons from "@expo/vector-icons/Ionicons";
import styled, { css } from "styled-components/native";

interface ContentProps {
  background: string;
  minHeight: number;
}

interface ButtonHeaderProps {
  alignItems: "flex-start" | "flex-end";
}

interface IconHeaderProps {
  color: string;
}

export const Container = styled.View<ContentProps>`
  ${({ background, minHeight }) => css`
    width: 100%;
    background-color: ${background};
    min-height: ${minHeight ? minHeight : 150}px;
    padding: 40px 16px 8px 16px;
  `}
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const ButtonHeader = styled.TouchableOpacity<ButtonHeaderProps>`
  ${({ alignItems }) => css`
    align-items: ${alignItems ? alignItems : "flex-start"};
    justify-content: center;

    width: 50px;
    height: 50px;
  `}
`;

export const IconHeader = styled(Ionicons)<IconHeaderProps>`
  font-size: 25px;
  color: ${({ theme, color }) => (color ? color : theme.colors.gray100)};
  margin-top: -5px;
`;
