import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../styles/Swiper.module.scss';
import { SliderItem } from './SliderItem';
import Link from 'next/link';

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
          <Link href="/continent/europe">
            <a>
              <SliderItem />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continent/europe">
            <a>
              <SliderItem />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continent/europe">
            <a>
              <SliderItem />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continent/europe">
            <a>
              <SliderItem />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continent/europe">
            <a>
              <SliderItem />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
