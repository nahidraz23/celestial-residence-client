// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img className='lg:h-[calc(100vh-64px)] w-full' src="../../../public/images/arkady_lukashov.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='lg:h-[calc(100vh-64px)] w-full' src="../../../public/images/darrell_fraser.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='lg:h-[calc(100vh-64px)] w-full' src="../../../public/images/marcin_ciszewski.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='lg:h-[calc(100vh-64px)] w-full' src="../../../public/images/paolo_nicolello.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='lg:h-[calc(100vh-64px)] w-full' src="../../../public/images/patrick_robert_doyle.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='lg:h-[calc(100vh-64px)] w-full' src="../../../public/images/rktkn.jpg" alt="" /> </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;