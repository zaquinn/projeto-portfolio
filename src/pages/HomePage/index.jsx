import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useContext } from "react";
import { RenderContext } from "../../context";
import avatar from "../../assets/AvatarMaker.svg";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const location = useLocation();

  const words = ["Front End", "Back End", "Full Stack"];
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <Flex
      height="max-content"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
    >
      <Header />
      <Flex h="75vh" w="100%" bg="transparent" justifyContent="center">
        <Flex
          pt="105px"
          pl="5%"
          pr="5%"
          w="100%"
          flexDirection={["column-reverse", "column-reverse", "row"]}
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            w={["100%", "100%", "50%"]}
            maxW="500px"
            h="100%"
          >
            <Heading lineHeight="2.8rem">Olá,</Heading>
            <Heading lineHeight="2.8rem">
              eu sou o{" "}
              <Text as="span" color="neon.200" lineHeight="2.8rem">
                Isaac Xavier
              </Text>
            </Heading>
            <Heading lineHeight="2.8rem">
              sou Desenvolvedor{" "}
              <Text as="span" color="cpunk.400" lineHeight="2.8rem">
                {text}
                <Text as="span" color="white" lineHeight="2.8rem">
                  <Cursor />
                </Text>
              </Text>
            </Heading>
          </Flex>
          <Flex w="200" justifyContent="center">
            <Image
              src={avatar}
              h={["150px", "150px", "200px"]}
              borderRadius="200px"
              border="3px solid"
              borderColor="cpunk.400"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
