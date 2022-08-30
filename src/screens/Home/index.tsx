import { CustomModal } from "@components/CustomModal";
import { GlobalHeader } from "@components/GlobalHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Label, Separator } from "@global/styles/global";
import React, { useRef } from "react";
import { Dimensions, StatusBar, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";

import { Container, ModalView } from "./styles";

export function Home() {
  const theme = useTheme();
  const customModal = useRef<Modalize>(null);

  const onOpen = () => {
    customModal.current?.open();
  };

  const onClose = () => {
    customModal.current?.close();
  };

  return (
    <>
      <GlobalHeader title="CHAT" />
      <Container>
        <Ionicons name="home-outline" color={theme.colors.gray100} size={50} />
        <Label size="xl">Home</Label>
        <Separator height={50} />
        <TouchableOpacity onPress={onOpen}>
          <Label>Open the modal</Label>
        </TouchableOpacity>
      </Container>
      <CustomModal ref={customModal} closeModal={onClose}>
        <ModalView>
          <Label color="primary800" size="lg">
            Modal Container
          </Label>
        </ModalView>
      </CustomModal>
    </>
  );
}
