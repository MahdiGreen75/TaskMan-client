import { Link } from "react-router-dom";
import SiteSection from "../SiteSection/SiteSection";

const Home = () => {
    return (
        <>
            <div className="min-h-screen ">
                <div className="hero min-h-screen bg-gradient-to-r from-cyan-300 to-blue-300 ">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Welcome to this real life task management tool.</p>
                            <Link to={"/dahsboard"}>
                                <button className="btn btn-primary">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <SiteSection></SiteSection>
        </>

    );
};

export default Home;