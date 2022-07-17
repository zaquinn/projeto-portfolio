import { Flex, Heading, Image, Text, keyframes } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import foto from "../../assets/minhafoto2.jpg";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const About = () => {
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
      overflow={["auto", "auto", "auto", "hidden"]}
    >
      <Header />
      <Flex
        h="max-content"
        w="100%"
        bg="transparent"
        direction="column"
        pb={["10px", "10px", "10px", "200px"]}
      >
        <Flex justifyContent="center">
          <Heading
            textShadow="rgb(232, 0, 116) 2px 2px, rgb(0, 207, 229) -1px -1px;"
            fontSize="45px"
            mb={["0px", "0px", "0px", "40px"]}
          >
            &lsaquo;Sobre mim&rsaquo;
          </Heading>
        </Flex>
        <Flex
          justifyContent="center"
          direction={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          alignItems={["center", "center", "center", "initial"]}
        >
          <Flex maxWidth={["300px", "400px", "500px"]}>
            <Text mt={["10px", "10px", "10px", "0px"]}>
              Desde criança sempre fui apaixonado por tecnologia; computadores e
              brinquedos que possuíam algum tipo de hardware para o seu
              funcionamento eram os meus passatempos prediletos (inclusive
              possuía o péssimo hábito de "dissecá-los" para checar como
              funcionavam, o que me rendeu algumas broncas por parte da minha
              mãe). Não tinha medo de quebrar as coisas para entender como
              funcionavam, e este espírito curioso me levou à área de
              programação no final do ano de 2021. Tenho desenvolvido minhas
              habilidades com código desde então, mantendo sempre a mesma
              essência de curiosidade e fome de aprender, desenvolver e criar
              minhas próprias soluções tecnológicas.{" "}
            </Text>
          </Flex>
          <Image
            src={foto}
            h={["250px", "300px"]}
            w="max-content"
            borderRadius="200px"
            border="3px solid"
            borderColor="cpunk.400"
            ml={["0px", "0px", "0px", "10px"]}
          />
        </Flex>
      </Flex>
      <Flex
        direction="row"
        w="180px"
        justifyContent="space-between"
        align="center"
        mt={["20px", "20px", "20px", "0px"]}
        mb={["20px", "20px", "20px", "90px"]}
      >
        <Flex
          color="gray.400"
          bg="transparent"
          fontSize={["70px", "80px"]}
          onClick={() => history.push("/")}
        >
          <AiOutlineLeft cursor="pointer" />
        </Flex>
        <Flex
          color="darkblue.600"
          as={motion.div}
          animation={animation}
          borderRadius="100px"
          bg="cpunk.400"
          onClick={() => history.push("/Projects")}
          fontSize={["70px", "80px"]}
        >
          <AiOutlineRight cursor="pointer" />
        </Flex>
      </Flex>
      <Flex as="footer" fontSize="12px">
        <Text>&lsaquo;/Desenvolvido com ♥ por Isaac&rsaquo;</Text>
      </Flex>
    </Flex>
  );
};
