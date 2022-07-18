import { Button, Flex, Heading, keyframes, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./styles.css";

export const Projects = () => {
  const history = useHistory();

  const animationKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(232 0 116); }
  70% { box-shadow: 0 0 0 23px rgb(232 0 116 / 0%); }
  100% { box-shadow: 0 0 0 0 rgb(232 0 116 / 0%); }
`;

  const swiper = {
    width: "100%",
    height: "100%",
    zIndex: "0",
  };

  const swiperSlide = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
  };

  const animation = `${animationKeyframes} 2s infinite`;
  return (
    <Flex
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
      justifyContent="space-between"
      overflow={["initial", "initial", "initial", "hidden"]}
    >
      <Header />
      <Flex
        h="max-content"
        w="100%"
        bg="transparent"
        direction="column"
        pb={["30px", "30px", "30px", "50px"]}
      >
        <Flex justifyContent="center">
          <Heading
            textShadow="rgb(232, 0, 116) 2px 2px, rgb(0, 207, 229) -1px -1px;"
            fontSize="45px"
            mb={["0px", "0px", "0px", "40px"]}
          >
            &lsaquo;Projetos&rsaquo;
          </Heading>
        </Flex>
        <Text alignSelf="center" pb="10px" px="5px">
          Estes são alguns dos projetos que desenvolvi ao longo da minha jornada
          até aqui. Sinta-se livre para fazer uma visita ao código e/ou deploy
          😊
        </Text>
        <Flex justifyContent="center">
          <Flex
            h={["400px", "400px", "400px", "500px"]}
            w={["100%", "100%", "100%", "70%"]}
            justifyContent="center"
            alignItems="center"
          >
            <Swiper
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              style={swiper}
            >
              <SwiperSlide style={swiperSlide}>
                <Flex
                  w="100%"
                  h="100%"
                  bgImage="url(https://i.postimg.cc/5N118XP1/nukenzie.png)"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  border="2px solid"
                  borderRadius="8px"
                  borderColor="cpunk.400"
                  alignItems="flex-end"
                >
                  <Flex
                    direction="column"
                    bgColor="cpunk.400"
                    borderTopRightRadius="30px"
                    w="100%"
                  >
                    <Heading fontSize="20px" color="white" pl="10px">
                      Projeto Nu Kenzie - Organização Financeira
                    </Heading>
                    <Flex
                      w="100%"
                      maxWidth="270px"
                      justifyContent="space-between"
                      pb="40px"
                      pl="10px"
                    >
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://react-entrega-s1-nu-kenzie-zaquinn-bj2w1bcxi-zaquinn.vercel.app/"
                        target="_blank"
                      >
                        Visitar projeto
                      </Button>
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-zaquinn"
                        target="_blank"
                      >
                        Visitar código
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={swiperSlide}>
                <Flex
                  w="100%"
                  h="100%"
                  bgImage="url(https://i.postimg.cc/d18p0BcC/burguerkenzie.png)"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  border="2px solid"
                  borderRadius="8px"
                  borderColor="cpunk.400"
                  alignItems="flex-end"
                >
                  <Flex
                    direction="column"
                    bgColor="cpunk.400"
                    borderTopRightRadius="30px"
                    w="100%"
                  >
                    <Heading fontSize="20px" color="white" pl="10px">
                      Projeto Burguer Kenzie - Lanchonete Online
                    </Heading>
                    <Flex
                      w="100%"
                      maxWidth="270px"
                      justifyContent="space-between"
                      pb="40px"
                      pl="10px"
                    >
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://react-entrega-s1-hamburgueria-da-kenzie-zaquinn.vercel.app/"
                        target="_blank"
                      >
                        Visitar projeto
                      </Button>
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-zaquinn"
                        target="_blank"
                      >
                        Visitar código
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={swiperSlide}>
                <Flex
                  w="100%"
                  h="100%"
                  bgImage="url(https://i.postimg.cc/sgYVtpvM/psique.png)"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  border="2px solid"
                  borderRadius="8px"
                  borderColor="cpunk.400"
                  alignItems="flex-end"
                >
                  <Flex
                    direction="column"
                    bgColor="cpunk.400"
                    borderTopRightRadius="30px"
                    w="100%"
                  >
                    <Heading fontSize="20px" color="white" pl="10px">
                      Projeto em grupo - Psique - Plataforma de tratamento
                      psicológico online
                    </Heading>
                    <Flex
                      w="100%"
                      maxWidth="270px"
                      justifyContent="space-between"
                      pb="40px"
                      pl="10px"
                    >
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://capstone-m3-sergioothoniel.vercel.app/"
                        target="_blank"
                      >
                        Visitar projeto
                      </Button>
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://github.com/sergioothoniel/capstone-m3/tree/develop"
                        target="_blank"
                      >
                        Visitar código
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={swiperSlide}>
                <Flex
                  w="100%"
                  h="100%"
                  bgImage="url(https://i.postimg.cc/RZHR90B6/kenziehub.png)"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  bgSize="cover"
                  border="2px solid"
                  borderRadius="8px"
                  borderColor="cpunk.400"
                  alignItems="flex-end"
                >
                  <Flex
                    direction="column"
                    bgColor="cpunk.400"
                    borderTopRightRadius="30px"
                    w="100%"
                  >
                    <Heading fontSize="20px" color="white" pl="10px">
                      Projeto KenzieHub - Plataforma de organização de estudo de
                      tecnologias
                    </Heading>
                    <Flex
                      w="100%"
                      maxWidth="270px"
                      justifyContent="space-between"
                      pb="40px"
                      pl="10px"
                    >
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://react-entrega-s2-kenzie-hub-zaquinn-8yu1n7zvk-zaquinn.vercel.app/"
                        target="_blank"
                      >
                        Visitar projeto
                      </Button>
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-zaquinn"
                        target="_blank"
                      >
                        Visitar código
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
              {/* <SwiperSlide style={swiperSlide}>
                <Flex
                  w="100%"
                  h="100%"
                  bgImage="url(https://i.postimg.cc/C1N7t6Vc/apiImg.jpg)"
                  bgPos="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  border="2px solid"
                  borderRadius="8px"
                  borderColor="cpunk.400"
                  alignItems="flex-end"
                >
                  <Flex
                    direction="column"
                    bgColor="cpunk.400"
                    borderTopRightRadius="30px"
                    w="100%"
                  >
                    <Heading fontSize="20px" color="white" pl="10px">
                      Projeto API em Express + Node
                    </Heading>
                    <Flex
                      w="100%"
                      maxWidth="270px"
                      justifyContent="space-between"
                      pb="40px"
                      pl="10px"
                    >
                      <Button
                        w="120px"
                        bg="cpunk.450"
                        _hover={{ bg: "cpunk.450", color: "cpunk.400" }}
                        as="a"
                        href="https://react-entrega-s1-nu-kenzie-zaquinn-bj2w1bcxi-zaquinn.vercel.app/"
                        target="_blank"
                      >
                        Visitar código
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide> */}
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        w="180px"
        justifyContent="space-between"
        align="center"
        pb="50px"
      >
        <Flex
          color="gray.400"
          bg="transparent"
          fontSize={["70px", "80px"]}
          onClick={() => history.push("/About")}
        >
          <AiOutlineLeft cursor="pointer" />
        </Flex>
        <Flex
          color="darkblue.600"
          as={motion.div}
          animation={animation}
          borderRadius="100px"
          bg="cpunk.400"
          onClick={() => history.push("/Techs")}
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
