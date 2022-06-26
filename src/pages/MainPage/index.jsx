import { Flex, Heading, Text } from "@chakra-ui/react";
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

export const MainPage = () => {
  const { shouldRender } = useContext(RenderContext);

  const words = ["Front End", "Back End", "Full Stack"];
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
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
        <Flex h="75vh" w="90%" bg="gray.300" justifyContent="center">
          <Heading pt="105px" fontSize={["14px", "14px", "14px", "initial"]}>
            Oi, eu sou o Isaac, sou Desenvolvedor{" "}
            <Text as="span" color="neon.300">
              {text}
              <Cursor />
            </Text>
          </Heading>
        </Flex>
      )}
      {shouldRender === "Projects" && (
        <Flex
          h="75vh"
          w="60%"
          bg="gray.200"
          justifyContent="center"
          alignItems="center"
        >
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
