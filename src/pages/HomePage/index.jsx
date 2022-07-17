import { Flex, Heading, keyframes, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HomePage = () => {
  const words = ["Front End", "Back End", "Full Stack"];
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  const history = useHistory();

  const animationKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(232 0 116); }
  70% { box-shadow: 0 0 0 23px rgb(232 0 116 / 0%); }
  100% { box-shadow: 0 0 0 0 rgb(232 0 116 / 0%); }
`;

  const animation = `${animationKeyframes} 2s infinite`;

  return (
    <Flex
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
      justifyContent="space-between"
      overflow="hidden"
    >
      <Header />
      <Flex h="max-content" w="100%" bg="transparent" justifyContent="center">
        <Flex
          pt={["0px", "0px", "0px", "105px"]}
          pl="5%"
          pr="5%"
          w="100%"
          flexDirection={["column", "column", "column", "column", "row"]}
          justifyContent="center"
          h="max-content"
        >
          <Flex
            flexDirection="column"
            w={["100%", "100%", "100%", "50%"]}
            maxW="500px"
            h={["220px", "220px", "220px", "220px", "100%"]}
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
          <Flex
            w={["100%", "100%", "600px"]}
            h={["110px", "110px", "110px", "110px", "300px"]}
            alignItems="flex-start"
            flexDirection="column"
            justifyContent={["flex-start", "flex-start", "flex-end"]}
          >
            <Heading fontSize={["16px", "18px", "23px"]} fontStyle="italic">
              “São as pessoas que ninguém imagina que fazem as coisas que
              ninguém pode imaginar”
            </Heading>
            <Heading
              fontSize={["16px", "18px", "23px"]}
              pt={["10px", "10px", "20px"]}
            >
              - Alan Turing
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        color="darkblue.600"
        as={motion.div}
        animation={animation}
        borderRadius="100px"
        bg="cpunk.400"
        onClick={() => history.push("/About")}
        fontSize={["70px", "80px"]}
      >
        <AiOutlineRight cursor="pointer" />
      </Flex>
      <Flex as="footer" fontSize="12px">
        <Text>&lsaquo;/Desenvolvido com ♥ por Isaac&rsaquo;</Text>
      </Flex>
    </Flex>
  );
};
