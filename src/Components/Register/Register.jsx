import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col max-w-md lg:w-full p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register</h1>
                    <p className="text-sm dark:text-gray-600">Register to create your account</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="*****"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-2 cursor-pointer">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="*****"
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                />
                            </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                            <NavLink to={'/login'} className="hover:underline dark:text-violet-600"> Login</NavLink>
                        </p>
                    </div>
                </form>
            </div>;
        </div>
    );
};

export default Register;