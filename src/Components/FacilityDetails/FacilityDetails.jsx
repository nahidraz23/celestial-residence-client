import { useLoaderData, useParams } from 'react-router-dom';
import liveBG from '../../assets/liveBG.svg'
import { FaMapMarkedAlt, FaLandmark } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import blobHaikeiArea from '../../assets/images/blobHaikeiArea.svg'
import blobHaikeiLocation from '../../assets/images/blobHaikeiLocation.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'animate.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './fd.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const FacilityDetails = () => {

    const bannerStyle = {
        backgroundImage: `url(${liveBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
    }

    const areaSection = {
        backgroundImage: `url(${blobHaikeiArea})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
    }

    const locationSection = {
        backgroundImage: `url(${blobHaikeiLocation})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
    };


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const stateFacilities = useLoaderData();
    const { id } = useParams();
    const facility = stateFacilities.find(service => service.id === parseInt(id));

    const { segment_name, estate_title, description, price, status, area, location, facilities, image1, image2, image3, image4 } = facility;

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <Helmet>
                <title>CR | {segment_name}</title>
            </Helmet>
            <div className='w-full h-60 lg:h-[560px]' style={bannerStyle}>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='animate__animated animate__bounceInDown text-3xl lg:text-8xl font-bold font-marcellus lg:text-white'>{segment_name} Details</h1>
                </div>
            </div>
            <div className='container mx-auto flex flex-col lg:flex-row items-center p-4 lg:p-0 gap-4 lg:gap-0'>
                <div className='flex flex-col flex-1 gap-5'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='text-4xl font-marcellus font-semibold'>{estate_title} <span className='text-purple-600'><sup>({status})</sup></span></h1>

                        <h2 className='text-xl font-medium font-inter '>{description}</h2>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className='flex gap-4'>
                            {
                                facilities.map((service, idx) => (
                                    <div key={idx} className="">
                                        <div className="lg:w-40 h-[216px] lg:h-44 border-2 p-6 space-y-3 text-center hover:bg-[#FFE6E6] hover:border-[#474F7A] hover:cursor-pointer hover:scale-90 duration-500">
                                            <div className="flex flex-col items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 className="text-lg font-marcellus">{service}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id='swiperFDParent' className="flex flex-1 justify-center">
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <div className='p-4 lg:p-0'>
                            <SwiperSlide>
                                <img
                                    src={image1}
                                    alt=""
                                    className="w-[430px] lg:w-[650px] h-[700px]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={image2}
                                    alt=""
                                    className="w-[430px] lg:w-[650px] h-[700px]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={image3}
                                    alt=""
                                    className="w-[430px] lg:w-[650px] h-[700px]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={image4}
                                    alt=""
                                    className="w-[430px] lg:w-[650px] h-[700px]"
                                />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
            {/* Area section */}
            <section data-aos='flip-left' data-aos-duration="1000" className='mt-10 lg:h-[440px] flex items- justify-center ' style={areaSection}>
                <div className='flex flex-col items-center lg:gap-5 p-4'>
                    <div>
                        <h1 className='text-2xl lg:text-5xl font-marcellus font-bold'>
                            Area
                        </h1>
                    </div>
                    <div className='flex flex-col items-center lg:gap-10'>
                        <FaLandmark className='w-24 h-24 lg:w-48 lg:h-48 text-green-600'></FaLandmark>
                        <h1 className='text-2xl lg:text-6xl font-inter font-semibold'>{area}</h1>
                    </div>
                </div>
            </section>
            {/* Location section */}
            <section data-aos='flip-right' data-aos-duration="1500" className='lg:h-[440px] flex items- justify-center ' style={locationSection}>
                <div className='flex flex-col items-center lg:gap-5 p-4'>
                    <div>
                        <h1 className='text-2xl lg:text-5xl font-marcellus font-bold'>
                            Location
                        </h1>
                    </div>
                    <div className='flex flex-col items-center lg:gap-10'>
                        <FaMapMarkedAlt className='w-24 h-24 lg:w-48 lg:h-48 text-red-600'></FaMapMarkedAlt>
                        <h1 className='text-2xl lg:text-6xl font-inter font-semibold'>{location}</h1>
                    </div>
                </div>
            </section>
            {/* Price section */}
            <section data-aos='flip-left' data-aos-duration="2000" className='lg:h-[440px] flex items- justify-center ' style={areaSection}>
                <div className='flex flex-col items-center lg:gap-5 p-4'>
                    <div>
                        <h1 className='text-2xl lg:text-5xl font-marcellus font-bold'>
                            Price
                        </h1>
                    </div>
                    <div className='flex flex-col items-center lg:gap-10'>
                        <HiCurrencyDollar className='w-24 h-24 lg:w-48 lg:h-48 text-green-600'></HiCurrencyDollar>
                        <h1 className='text-2xl lg:text-6xl font-inter font-semibold'>{price}</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacilityDetails;