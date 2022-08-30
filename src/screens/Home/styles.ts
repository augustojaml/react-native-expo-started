import { Dimensions, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray800};
  `}
`;

export const ModalView = styled(View)`
  ${({ theme }) => css`
    height: ${Dimensions.get("screen").height * 0.55}px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary400};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `}
`;
