import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center gap-5 p-4">
            <div>
                <h1 className="text-4xl font-marcellus font-bold">Book your desired property</h1>
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
                            <input type="text" name="fname" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm">Phone number</label>
                            <input type="number" name="phoneNumber" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="checkIn" className="block mb-2 text-sm">Check In Date</label>
                            <input type="date" name="checkIn" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="checkOut" className="block mb-2 text-sm">Check Out Date</label>
                            <input type="date" name="checkOut" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#19376D] hover:bg-gray-200 hover:text-[#19376D] text-gray-50">Book Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Bookings;