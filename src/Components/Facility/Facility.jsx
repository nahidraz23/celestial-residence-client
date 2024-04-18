import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Facility = ({ facility, index }) => {
    const { segment_name, facilities, image, description, id } = facility;

    return (
        <div data-aos={index%2 === 0 ? "fade-left" : "fade-right"} data-aos-duration="1000" className="flex flex-col lg:flex-row gap-10 overflow-hidden">
            <div className="flex-1 flex justify-center">
                <img
                    src={image}
                    alt=""
                    className="w-[557px] h-[556px] hover:scale-110 hover:cursor-pointer"
                />
            </div>

            <div className="space-y-14 flex flex-col justify-center flex-1">
                <div>
                    <h1 className="text-4xl text-[#19376D] font-marcellus font-semibold">{segment_name}</h1>
                </div>
                <div>
                    <p className="text-2xl font-inter">{description}</p>
                </div>
                <div className="flex gap-5">
                    {facilities.map((service, idx) => (
                        <div key={idx} className="">
                            <div className="lg:w-40 h-[216px] lg:h-44 border-2 p-1 lg:p-6 space-y-3 text-center hover:bg-[#FFE6E6] hover:border-[#474F7A] hover:cursor-pointer hover:scale-90 duration-500">
                                <div className="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF9843]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-lg text-[#19376D] font-marcellus">{service}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-10 ml-4">
                    <button className="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#A5D7E8] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <Link to='/booking'><span className="relative">Book Now</span></Link>
                    </button>
                    <Link to={`/facilityDetails/${id}`} className="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#AD88C6] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">View Details</span>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Facility;
