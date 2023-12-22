import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";
import TableRow from "./TableRow";

const Profile = () => {
    const [completedSessions, setCompletedSessions] = useState([]);
    const [incompletedSessions, setInCompletedSessions] = useState([]);
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://pomodoro-server.vercel.app/api/v1/user/completed-sessions?email=${user?.email}`)
                .then(res => {
                    setCompletedSessions(res.data);
                })
        }
    }, [user?.email])

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://pomodoro-server.vercel.app/api/v1/user/incompleted-sessions?email=${user?.email}`)
                .then(res => {
                    setInCompletedSessions(res.data);
                })
        }
    }, [user?.email])

    if (isLoading) {
        return <div className="w-full my-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className=" p-5 border-1 bg-orange-50 border-t-[30px] rounded-t-md border-blue-500 relative">
            <span className="text-xs text-orange-50 font-bold absolute -top-4 left-1/2 w-auto transform -translate-x-1/2 -translate-y-1/2">Welcome, {user?.displayName} </span>
            {/* completed sessions list */}
            <div className="mb-8">
                <div className="overflow-x-auto">
                    <div>
                        <h2 className="text-base mb-1 font-bold">Your completed sessions:</h2>
                    </div>
                    <table className="table table-zebra p-5 border-2">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Session Name</th>
                                <th>Session status</th>
                                <th>Session Limit (min)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            completedSessions.map((item, idx)=><TableRow 
                            idx={idx} 
                            key={item._id} 
                            sessionName={item.sessionName}
                            sessionLimit={item.sessionLimit}
                            sessionStatus={item.isSessionCompleted}
                            ></TableRow>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Incompleted sessions list */}
            <div>
                <div className="overflow-x-auto">
                    <div>
                        <h2 className="text-base mb-1 font-bold">Your incompleted sessions:</h2>
                    </div>
                    <table className="table table-zebra p-5 border-2">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Session Name</th>
                                <th>Session status</th>
                                <th>Session Limit (min)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            incompletedSessions.map((item, idx)=><TableRow 
                            idx={idx} 
                            key={item._id} 
                            sessionName={item.sessionName}
                            sessionLimit={item.sessionLimit}
                            sessionStatus={item.isSessionCompleted}
                            ></TableRow>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;