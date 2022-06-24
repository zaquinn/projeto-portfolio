import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export const MainPage = () => {
  AOS.init();
  return (
    <VStack h="max-content" bg="darkblue.900">
      <Flex
        justifyContent="space-between"
        h="2000px"
        bgGradient="linear(to-b, darkblue.400, darkblue.500, darkblue.900 )"
        w="100%"
        py="30px"
      >
        <VStack>
          <Heading
            color="white"
            borderRadius="8px"
            padding="5px"
            borderColor="green.200"
          >
            &lt;Isaac Xavier&gt;
          </Heading>
          <Text color="white" fontSize="16px" fontWeight="700">
            &lt;Desenvolvedor Full Stack&gt;
          </Text>
        </VStack>
        <Box>
          <Button
            borderColor="darkblue.400"
            bg="gray.700"
            padding="5px"
            color="white"
            border="2px solid"
            borderRadius="14px"
          >
            {/* tag link do react scroll pra gerar efeito de ir pra onde eu quero, em to"section1", passar o id
            da div que eu quero que vá quando clicar, atribuir id a div desejada tambem */}
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Link R-Scroll
            </Link>
          </Button>
          <Button
            borderColor="darkblue.400"
            bg="gray.700"
            padding="5px"
            color="white"
            border="2px solid"
            borderRadius="14px"
          >
            Botão 1
          </Button>
        </Box>
      </Flex>
      <Heading>Corpo aqui</Heading>
      <Flex
        h="600px"
        w="50%"
        bg="green.200"
        // configurações de animação do scroll que faz com que ocorra animação ao aparecer e sumir
        data-aos="fade-up"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <Heading>Testando</Heading>
      </Flex>
      <Flex
        h="600px"
        w="50%"
        bg="green.200"
        // configurações de animação do scroll que faz com que ocorra animação ao aparecer e sumir
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <Heading>Lib</Heading>
      </Flex>
      <Flex
        h="600px"
        w="50%"
        bg="green.200"
        // configurações de animação do scroll que faz com que ocorra animação ao aparecer e sumir
        data-aos="flip-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <Heading>Aos</Heading>
      </Flex>
    </VStack>
  );
};
