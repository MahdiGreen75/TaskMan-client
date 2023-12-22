import { Link, useNavigate } from "react-router-dom";
import "./background.css"
import useAuth from "../../hooks/useAuth/useAuth";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
const SignUp = () => {
    const navigate = useNavigate();
    const { signUp, user, logOutUser, isLoading } = useAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        handleGoogleSignIn(provider)
        .then(res => {
            console.log("Google sign in successfull from singup", res);
            navigate("/login");
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const picLink = form.picLink.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, password, picLink, email);
        signUp(email, password)
            .then(result => {
                //register update profile
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: picLink
                })
            })
            .then(() => {
                form.reset();
                console.log("profile updated successfull.")
                return logOutUser();
            })
            .then(() => {
                console.log(`${user?.displayName} Logout successfull.`)
                navigate("/login");
            })
            .catch(() => console.err("profile update error."))

    }

    if (isLoading) {
        return <div className="w-full my-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="flex flex-col w-full p-5 items-center justify-center background pb-5 min-h-screen">
            <h2 className="text-center my-5 font-bold text-2xl">Time is the precious currency</h2>
            <div className="border-pink-500 bg-pink-500 bg-opacity-100">
                <form onSubmit={handleLogin} className="font-semibold flex flex-col items-center gap-4 p-5 rounded-md ">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">What is your name?</span>
                        </div>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">What is your email?</span>
                        </div>
                        <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Give your profile picture link?</span>
                        </div>
                        <input type="text" name="picLink" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Input Your password.</span>
                        </div>
                        <input type="password" name="password" placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <input type="submit" value="Sign Up" className="btn btn-sm font-bold" />
                    <div className="divider"></div>
                    <span className="font-bold">Already have an account? <Link to={"/login"}><span className="text-blue-800 font-bold">Please Login.</span></Link></span>
                </form>
                <div className="p-5 text-center">
                    <div className="divider font-bold">OR</div>
                    <span className="text-base font-bold flex justify-center items-center gap-2">Sign in with <button onClick={handleGoogleSignIn} className="flex justify-center items-center gap-1"> <FcGoogle /> Google</button></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;