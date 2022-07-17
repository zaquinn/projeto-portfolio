import { Flex, keyframes } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const Projects = () => {
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
        Estou na Projects
      </Flex>
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
    </Flex>
  );
};
