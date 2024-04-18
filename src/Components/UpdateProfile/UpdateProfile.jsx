import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const UpdateProfile = () => {

    const {user} = useContext(AuthContext);
    const [userProfileUpdate, setUserProfileUpdate] = useState(false);    

    const handleUpdateProfile = (e) => {
        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;

        if(user) {
            updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL
            })
            .then(() => {
                setUserProfileUpdate(true);
                toast.success("Profile update successfull.");
            })
            .catch((error) => {
                toast.error(error.message);
            })
        }
    }

    return (
        <div className="container mx-auto min-h-[calc(100vh-439px)]">
            <Helmet>
                <title>CR | Update Profile</title>
            </Helmet>
            <div>
                <h1 className="text-5xl font-bold text-center p-8 font-marcellus">Update Profile</h1>
            </div>

            <div className="flex items-center justify-center lg:p-10">
                <div className="flex items-center justify-center text-center border-2 border-[#576CBC] rounded-xl">
                    <form onSubmit={handleUpdateProfile} className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800">
                        <label htmlFor="displayName" className="self-start text-xs font-semibold">Email</label>
                        <input disabled name="displayName" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" placeholder={user.email} />
                        <label htmlFor="displayName" className="self-start mt-3 text-xs font-semibold">Name</label>
                        <input name="displayName" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" placeholder={user.displayName}/>
                        <label htmlFor="photoURL" className="self-start mt-3 text-xs font-semibold">PhotoURL</label>
                        <input name="photoURL" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" placeholder={user.photoURL} required/>
                        <button className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-[#19376D] hover:bg-gray-200 hover:text-[#19376D] text-gray-50">Update</button>
                    </form>
                </div>
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

export default UpdateProfile;