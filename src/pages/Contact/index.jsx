import { Flex, Heading, Image, Text, keyframes } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const Contact = () => {
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
      <Flex h="75vh" w="90%" bg="transparent">
        Estou na Contact
      </Flex>
      <Flex
        direction="row"
        w="180px"
        justifyContent="space-between"
        align="center"
      >
        <Flex
          color="gray.400"
          bg="transparent"
          fontSize={["70px", "80px"]}
          onClick={() => history.push("/Techs")}
        >
          <AiOutlineLeft cursor="pointer" />
        </Flex>
      </Flex>
    </Flex>
  );
};
