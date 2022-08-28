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
        adjustToContentHeight={false}
        modalStyle={{ backgroundColor: "transparent" }}
        scrollViewProps={{ contentContainerStyle: { height: "100%" } }}
      >
        <AbsoluteButton onPress={closeModal}>
          <Icon
            name="close-circle-outline"
            size={30}
            color={theme.colors.gray100}
          />
        </AbsoluteButton>
        {children}
      </Modalize>
    );
  }
);

const AbsoluteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
`;
