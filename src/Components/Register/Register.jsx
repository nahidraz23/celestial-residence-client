import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;


        if (confirmPassword !== password) {
            toast.error('Password did not matched');
            return;
        }
        if (password.length < 6) {
            toast.error("Password length should be more than 6 charecters long.");
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error("Your password should have at least 1 uppercase letter");
            return;
        }

        createUser(email, password)
            .then(() => {
                toast.success("Registration successfull.");
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="min-h-[calc(100vh-100px)]">
            <Helmet>
                <title>CR | Register</title>
            </Helmet>
            <div className="w-full flex justify-center my-10 ">
                <div className="flex flex-col max-w-md lg:w-full p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 border-2 border-[#576CBC]">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register</h1>
                        <p className="text-sm dark:text-gray-600">Register to create your account</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input type="text" name="displayName" id="name" placeholder="leroy jenkins" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm">Photo URL</label>
                                <input type="text" name="photoURL" id="photoURL" placeholder="https://picsum.photos/200/300" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="*****"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-10 right-2 cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="relative">
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="*****"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required
                                />
                                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-10 right-2 cursor-pointer">
                                    {
                                        showConfirmPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#19376D] text-gray-50 hover:bg-gray-200 hover:text-[#19376D]">Register</button>
                            </div>
                            <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                                <NavLink to={'/login'} className="hover:underline text-[#576CBC]"> Login</NavLink>
                            </p>
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
        </div>
    );
};

export default Register;