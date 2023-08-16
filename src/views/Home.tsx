
import { Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assets/global.css'

function Home() {
    return (
        <>
            <Swiper
                className="swiper"
                modules={[Navigation, Pagination,]}
                autoplay={{
                    delay: 5000,
                }}
                width={500}
                speed={800}
                navigation
                loop
                pagination={{ clickable: true }}
                >
                <SwiperSlide><img src='https://s.cn.bing.net/th?id=OHR.WorldLionDay_EN-CN2733412500_1920x1080.webp&qlt=50'/></SwiperSlide>
                <SwiperSlide><img src='https://s.cn.bing.net/th?id=OHR.WorldLionDay_EN-CN2733412500_1920x1080.webp&qlt=50'/></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home