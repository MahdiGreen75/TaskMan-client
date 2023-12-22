import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    const link = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log("User is logged Out", res);
            })
    }

    return (
        <div className="navbar bg-blue-500 border-b-2 border-blue-700 text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TaskMan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="border border-blue-400 p-2 rounded-sm flex justify-center items-center gap-2">
                            <span className="flex gap-1 justify-center items-center ">
                                <span className="bg-blue-800 rounded-full">
                                    <img src={user?.photoURL} className="w-5 rounded-full" />
                                </span>
                                <span className="text-xs font-semibold">{user?.displayName}</span>
                            </span>
                            <button onClick={handleSignOut} className="text-xs bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-300 font-bold px-2 py-1 rounded-sm">Log Out</button>
                        </div>
                        :
                        <Link to={"/login"}>
                            <button className="text-xs font-semibold bg-blue-800 rounded-full text-white p-2">Join Us</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;