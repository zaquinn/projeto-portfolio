import { Flex, Heading, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import { Header } from "../../components/Header";

import { useTypewriter, Cursor } from "react-simple-typewriter";

AOS.init();
export const MainPage = () => {
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
    >
      <Header />
      <Flex
        h="100vh"
        w="100%"
        bg="transparent"
        id="section1"
        justifyContent="center"
        mb="100px"
      >
        <Heading
          pt="105px"
          fontSize={["14px", "14px", "14px", "initial"]}
          w="100%"
          data-aos="fade-down-right"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          Oi, eu sou o Isaac, sou Desenvolvedor{" "}
          <Text as="span" color="neon.300">
            {text}
            <Cursor />
          </Text>
        </Heading>
      </Flex>
      <Flex
        h="100vh"
        w="60%"
        bg="gray.300"
        id="section2"
        justifyContent="center"
        alignItems="center"
        data-aos="fade-down-left"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        mb="100px"
      >
        <Heading>Seçao 2</Heading>
      </Flex>
      <Flex
        h="100vh"
        w="60%"
        bg="gray.200"
        id="section3"
        justifyContent="center"
        alignItems="center"
        data-aos="fade-down-right"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        mb="100px"
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
      <Flex
        h="100vh"
        w="60%"
        bg="gray.200"
        id="section4"
        data-aos="fade-down-left"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        mb="100px"
      >
        <Heading>Seçao 4</Heading>
      </Flex>
      <Flex
        h="100vh"
        w="60%"
        bg="gray.200"
        id="section5"
        data-aos="fade-down-right"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        mb="100px"
      >
        <Heading>Seçao 5</Heading>
      </Flex>
      <Flex h="100px" bg="futuristas.200" as="footer" w="100%">
        Rodapé
      </Flex>
    </Flex>
  );
};
