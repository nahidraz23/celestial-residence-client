import { useEffect, useState } from "react";
import Facility from "../Facility/Facility";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Facilities = () => {

    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        fetch("https://nahidraz23.github.io/JSON_Data/luxury_living.json")
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, []);

    return (
        <div className="container mx-auto lg:mt-24">
            <div className="text-center text-4xl lg:text-6xl font-marcellus font-medium "> 
                <h1 data-aos="fade-down" data-aos-duration="1500" className=""><span className="text-[#19376D] border-b-2 border-[#19376D]">Our Luxury Facilities</span></h1>
            </div>

            <div className="flex flex-col gap-10 my-10 p-4 lg:p-0 overflow-x-hidden">
                {
                    facilities.map((facility, index) => <Facility key={index} index={index} facility={facility}></Facility>)
                }
            </div>
        </div>
    );
};

export default Facilities;