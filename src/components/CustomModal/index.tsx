import { forwardRef, ReactNode } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import styled, { useTheme } from "styled-components/native";

import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface ModalProps {
  children: ReactNode;
  closeModal?: () => void;
}

export const CustomModal = forwardRef<IHandles, ModalProps>(
  ({ children, closeModal }, ref) => {
    const theme = useTheme();

    return (
      <Modalize
        ref={ref}
        adjustToContentHeight={true}
        modalStyle={{ backgroundColor: "transparent" }}
        overlayStyle={{ backgroundColor: "transparent" }}
      >
        <AbsoluteButton onPress={closeModal}>
          <Icon
            name="close-circle-outline"
            size={30}
            color={theme.colors.gray}
          />
        </AbsoluteButton>
        {children}
      </Modalize>
    );
  }
);

const AbsoluteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;
