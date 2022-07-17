import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

export const Projects = () => {
  return (
    <Flex
      height="max-content"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
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
    </Flex>
  );
};
