import { CustomModal } from "@components/CustomModal";
import { GlobalHeader } from "@components/GlobalHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Separator, Text } from "@global/styles/global";
import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
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
        <Ionicons name="home-outline" size={50} />
        <Text size="small">Home</Text>

        <Separator height={50} />
        <TouchableOpacity onPress={onOpen}>
          <Text>Open the modal</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
