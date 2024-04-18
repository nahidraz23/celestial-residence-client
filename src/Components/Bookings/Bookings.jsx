import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const[checkbox, setCheckBox] = useState(false);

    const handleBookingSubmit = () => {
        if(checkbox){
            toast.success("Booking successfull");
        }
        else{
            toast.error("Please accept terms and conditions")
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center gap-10 p-4">
            <Helmet>
                <title>CR | Booking</title>
            </Helmet>
            <div>
                <h1 className="text-2xl lg:text-4xl font-marcellus font-bold">Book your desired property</h1>
            </div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 text-gray-800 border-2 border-[#576CBC]">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-2xl font-bold">Enter Information</h1>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            {
                                user.email ?
                                    <input disabled type="text" name="fname" placeholder={user?.email} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                                    :
                                    <input type="text" name="fname" placeholder={user?.email} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 " />
                            }

                        </div>
                        <div>
                            <label htmlFor="fname" className="block mb-2 text-sm">Full name</label>
                            <input type="text" name="fname" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"required />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm">Phone number</label>
                            <input type="number" name="phoneNumber" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required/>
                        </div>
                        <div>
                            <label htmlFor="checkIn" className="block mb-2 text-sm">Check In Date</label>
                            <input type="date" name="checkIn" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required/>
                        </div>
                        <div>
                            <label htmlFor="checkOut" className="block mb-2 text-sm">Check Out Date</label>
                            <input type="date" name="checkOut" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required/>
                        </div>
                        <div>
                            <label htmlFor="countries" className="block mb-2 text-sm">Select an property</label>
                            <select id="countries" className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option selected>Choose a property</option>
                                <option value="US">Penthouse</option>
                                <option value="CA">Beachfront Property</option>
                                <option value="FR">Resort</option>
                                <option value="DE">Private Island</option>
                                <option value="DE">Mountain Lodge</option>
                                <option value="DE">Castle</option>
                                <option value="DE">Luxury Yacht</option>
                                <option value="DE">Luxury Ranch</option>
                                <option value="DE">Sky Villa</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input onClick={() => setCheckBox(!checkbox)} type="checkbox" name="" id="" />
                        <label htmlFor="checkbox">Accept the <span className="border-b-2 border-blue-400 text-blue-400 hover:cursor-pointer">terms and conditions</span>.</label>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button onClick={handleBookingSubmit} type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#19376D] hover:bg-gray-200 hover:text-[#19376D] text-gray-50">Book Now</button>
                        </div>
                    </div>
                </form>
            </div>
            <Toaster
                    position="bottom-right"
                    toastOptions={
                        {
                            duration: 2000,
                        }
                    }
                />
        </div>
    );
};

export default Bookings;