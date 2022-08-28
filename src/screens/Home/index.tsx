import { CustomModal } from "@components/CustomModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Label, Separator } from "@global/styles/global";
import React, { useRef } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

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
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Container>
        <Ionicons name="home-outline" color={theme.colors.gray100} size={50} />
        <Label size={50}>Home</Label>
        <Separator height={50} />
        <TouchableOpacity onPress={onOpen}>
          <Label>Open the modal</Label>
        </TouchableOpacity>
      </Container>
      <CustomModal ref={customModal} closeModal={onClose}>
        <Container>
          <Ionicons
            name="home-outline"
            color={theme.colors.gray100}
            size={50}
          />
        </Container>
      </CustomModal>
    </>
  );
}
