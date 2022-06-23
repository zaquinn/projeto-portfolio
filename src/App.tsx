import { Heading, VStack } from "@chakra-ui/react";
import React from "react";

export const App = () => {
  return (
    <VStack h="400px" bg="gray.700">
      <VStack h="80px" bg="green.200" w="100%">
        <Heading color="gray.800">Menu aqui</Heading>
      </VStack>
      <Heading>Corpo aqui</Heading>
    </VStack>
  );
};
