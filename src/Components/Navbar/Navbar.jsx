import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const navLinks = (
        <div className="flex gap-8 flex-col lg:flex-row text-xl uppercase">
            <NavLink
                to={"/"}
                style={({ isActive }) => {
                    return isActive
                        ? {
                            borderBottom: "2px solid #FEDA60",
                            color: "#FEDA60",
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
                            borderBottom: "2px solid #FEDA60",
                            color: "#FEDA60",
                            fontWeight: "600",
                        }
                        : {};
                }}
            >
                <li className="">Update Profile</li>
            </NavLink>
            {
                user &&
                <div>
                    <NavLink
                        to={"/user-profile"}
                        style={({ isActive }) => {
                            return isActive
                                ? {
                                    borderBottom: "2px solid #FEDA60",
                                    color: "#FEDA60",
                                    fontWeight: "600",
                                }
                                : {};
                        }}
                    >
                        <li className="">User Profile</li>
                    </NavLink>
                </div>
            }
        </div>
    );

    const handleUserSignOut = () => {
        signOutUser()
        .then( result => {
            toast.success("Sign out successfull.")
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    return (
        <div className="w-full">
            <div className="navbar container mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <h1 className="text-2xl font-bold font-inter ">
                        Celestial Residence
                    </h1>
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
                                className="btn"
                            >
                                Sign out
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <NavLink to={"/login"}>
                                <button className="btn">Login</button>
                            </NavLink>
                            <NavLink to={"/register"}>
                                <button className="btn">Register</button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
