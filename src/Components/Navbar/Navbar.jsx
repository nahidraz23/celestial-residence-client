import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const navLinks = (
        <div className="flex gap-8 flex-col lg:flex-row text-xl uppercase text-white">
            <NavLink
                to={"/"}
                style={({ isActive }) => {
                    return isActive
                        ? {
                            borderBottom: "2px solid #A5D7E8",
                            color: "#A5D7E8",
                            fontWeight: "600",
                        }
                        : {};
                }}
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to={"/update-profile"}
                style={({ isActive }) => {
                    return isActive
                        ? {
                            borderBottom: "2px solid #A5D7E8",
                            color: "#A5D7E8",
                            fontWeight: "600",
                        }
                        : {};
                }}
            >
                <li className="">Update Profile</li>
            </NavLink>
            <NavLink
                to={"/booking"}
                style={({ isActive }) => {
                    return isActive
                        ? {
                            borderBottom: "2px solid #A5D7E8",
                            color: "#A5D7E8",
                            fontWeight: "600",
                        }
                        : {};
                }}
            >
                <li className="">Booking</li>
            </NavLink>
            {
                user &&

                <NavLink
                    to={"/user-profile"}
                    style={({ isActive }) => {
                        return isActive
                            ? {
                                borderBottom: "2px solid #A5D7E8",
                                color: "#A5D7E8",
                                fontWeight: "600",
                            }
                            : {};
                    }}
                >
                    <li className="">User Profile</li>
                </NavLink>

            }
        </div>
    );

    const handleUserSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Sign out successfull.")
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="w-full bg-[#0B2447]">
            <div className="navbar container mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown text-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#19376D] rounded-box w-52 z-10"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <h1 className="lg:text-3xl lg:font-bold font-marcelleus text-white">
                                Celestial Residence
                            </h1>
                        </Link>
                        <h2 className="text-[#A5D7E8] font-thin text-sm text-center">Luxury Living</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex gap-3 items-center">
                            <div className="avatar">
                                <div
                                    className={`w-12 rounded-full`}
                                    data-twe-toggle="tooltip"
                                    title={`${user.displayName}`}
                                >
                                    <div>
                                        {
                                            user.photoURL ?
                                                <div>
                                                    <img src={user.photoURL} alt="" />
                                                </div>
                                                :
                                                <div>
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleUserSignOut}
                                className="btn bg-[#A5D7E8] border-none"
                            >
                                Sign out
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-1 lg:gap-4">
                            <NavLink to={"/login"}>
                                <button className="btn bg-[#A5D7E8] border-none ">Login</button>
                            </NavLink>
                            <NavLink to={"/register"}>
                                <button className="btn bg-[#A5D7E8] border-none">Register</button>
                            </NavLink>
                        </div>
                    )}
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

export default Navbar;
