import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export const Techs = () => {
  return (
    <Flex
      height="max-content"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
    >
      <Header />
      <Flex h="75vh" w="90%" bg="transparent">
        Estou na Techs
      </Flex>
    </Flex>
  );
};
