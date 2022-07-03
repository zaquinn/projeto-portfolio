import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import { Header } from "../../components/Header";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useContext } from "react";
import { RenderContext } from "../../context";
import avatar from "../../assets/AvatarMaker.svg";

export const MainPage = () => {
  const { shouldRender } = useContext(RenderContext);

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
      {shouldRender === "Home" && (
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
      )}
      {shouldRender === "About" && (
        <Flex h="75vh" w="90%" bg="transparent"></Flex>
      )}
      {shouldRender === "Projects" && (
        <Flex h="75vh" w="60%" justifyContent="center" alignItems="center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </Flex>
      )}
    </Flex>
  );
};
