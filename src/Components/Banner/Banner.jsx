// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { TypeAnimation } from 'react-type-animation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div id='bannerSwiper'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-96 lg:h-[calc(100vh-64px)] w-full relative'>
                        <img className='h-80 lg:h-[calc(100vh-64px)] w-full' src="https://i.ibb.co/kD4vPFW/patrick-robert-doyle.jpg" alt="" />

                        <div >
                            <div className='absolute top-20 lg:top-60 left-[130px] lg:left-[750px] border-b-2 border-[#803D3B]'>
                                <h1 className='lg:text-6xl text-center font-marcellus font-bold'>
                                    Welcome to
                                </h1>
                                <h1 className='lg:text-6xl text-center font-marcellus font-bold'>
                                <span className='text-[#803D3B]'>Celestial Residence</span>
                                </h1>
                            </div>
                            <div className='absolute top-36 lg:top-96 lg:left-[250px]'>
                                <h1 className='lg:text-6xl text-center font-marcellus font-bold'><TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Discover the art of Travelling',
                                        1000, // wait 1s before replacing "Relaxing" with "Travelling"
                                        'Discover the art of Relaxing',
                                        1000,
                                        'Discover the art of Living',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={20}
                                    style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={0}
                                    cursor={false}
                                /></h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 lg:h-[calc(100vh-64px)] w-full'>
                        <img className='h-80 lg:h-[calc(100vh-64px)] w-full' src="https://i.ibb.co/WHTJdZL/arkady-lukashov.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 lg:h-[calc(100vh-64px)] w-full'>
                        <img className='h-80 lg:h-[calc(100vh-64px)] w-full' src="https://i.ibb.co/frjPPZ3/darrell-fraser.jpg" alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 lg:h-[calc(100vh-64px)] w-full'>
                        <img className='h-80 lg:h-[calc(100vh-64px)] w-full' src="https://i.ibb.co/TYqJz3t/marcin-ciszewski.jpg" alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 lg:h-[calc(100vh-64px)] w-full'>
                        <img className='h-80 lg:h-[calc(100vh-64px)] w-full' src="https://i.ibb.co/Q97GqDC/paolo-nicolello.jpg" alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-96 lg:h-[calc(100vh-64px)] w-full'>
                        <img className='h-80 lg:h-[calc(100vh-64px)] w-full' src="https://i.ibb.co/NpnG1RD/rktkn.jpg" alt="" />
                    </div>

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;