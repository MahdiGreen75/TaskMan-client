
const Dashboard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const taskTitle = form.title.value;
        const taskDeadLine = form.deadline.value;
        const taskTime = form.time.value;
        const taskPriority = form.priority.value;
        const taskDetails = form.details.value;
        console.log(taskTitle, taskDetails, taskDeadLine, taskPriority, taskTime);
        form.clear();
    }

    return (
        <div className="min-h-screen dashboard-background flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <div>
                    <div><h2 className="text-xl font-semibold text-center my-2">Create Your Task</h2></div>
                    <form className="flex flex-col gap-1 w-64 p-2 border rounded-lg opacity-90 shadow-xl" onSubmit={handleSubmit}>
                        <input type="text" name="title" placeholder="Task title" className="placeholder:text-sm input input-bordered w-full max-w-xs" />
                        <textarea name="details" className="textarea textarea-bordered placeholder:text-sm" placeholder="Task description"></textarea>
                        <div className="flex gap-1">
                            <input type="date" name="deadline" className="w-[148px] input input-bordered max-w-xs" />
                            <input type="time" name="time" defaultValue="12:00" className="flex-1 rounded-md" />
                        </div>
                        <select name="priority" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Task priority</option>
                            <option value={"low"}>Low</option>
                            <option value={"mediam"}>Mediam</option>
                            <option value={"high"}>High</option>
                        </select>
                        <input type="submit" value="Add to Todo List" className="btn btn-sm" />
                    </form>
                </div>
                <div>
                    <div><h2 className="text-xl font-semibold text-center my-2">To do list</h2></div>
                    <div className="w-64 bg-red-600 border rounded-xl shadow-xl">

                    </div>
                </div>
                <div>
                    <div><h2 className="text-xl font-semibold text-center my-2">On going list</h2></div>
                    <div className="w-64 bg-red-600 border rounded-xl shadow-xl">

                    </div>
                </div>
                <div>
                    <div><h2 className="text-xl font-semibold text-center my-2">Completed list</h2></div>
                    <div className="w-64 bg-red-600 border rounded-xl shadow-xl">

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;