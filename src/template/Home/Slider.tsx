import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../styles/Swiper.module.scss';
import { SliderItem } from './SliderItem';

export const Slider = () => {
  return (
    <Box className={styles.wrapperSwipper}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
