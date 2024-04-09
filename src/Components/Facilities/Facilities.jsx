import { useEffect, useState } from "react";
import Facility from "../Facility/Facility";

const Facilities = () => {

    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        fetch("https://nahidraz23.github.io/JSON_Data/luxury_living.json")
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, []);

    return (
        <div className="container mx-auto mt-24">
            <div className="text-center text-6xl font-marcellus font-medium "> 
                <h1 className=""><span className="border-b-2">Our Facilities</span></h1>
            </div>

            <div className="flex flex-col gap-10 my-10">
                {
                    facilities.map((facility, idx) => <Facility key={idx} facility={facility}></Facility>)
                }
            </div>
        </div>
    );
};

export default Facilities;