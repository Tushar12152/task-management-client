import { useQuery } from "@tanstack/react-query";
import Title from "../API's/Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import ToDoTask from "./ToDoTask";
import OngoingTask from "./Ongoing";
import CompletedTask from "./Completed";
import { useState, useEffect } from "react";

const TodoList = () => {
    const axiosSecure = useAxiosSecure();

    const { data: fetchedTasks = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`);
            return res.data;
        },
    });

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Update tasks after fetching data
        setTasks(fetchedTasks);
    }, [fetchedTasks]);

    const handleTaskDrop = (taskId, targetStatus) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: targetStatus };
            }
            return task;
        });

        setTasks(updatedTasks);
        console.log(taskId);
    };

    return (
        <div>
            <Title heading={'To Do List'}></Title>
            <DndProvider backend={HTML5Backend}>
                <div className="tasks-container">
                    <div className="todo">
                        <h2>To Do</h2>
                        {tasks.map(task => (
                            <ToDoTask key={task.id} task={task} />
                        ))}
                    </div>
                    <div className="ongoing">
                        <h2>Ongoing</h2>
                        {/* Ongoing tasks component */}
                        <OngoingTask onTaskDrop={handleTaskDrop} />
                    </div>
                    <div className="completed">
                        <h2>Completed</h2>
                        {/* Completed tasks component */}
                        <CompletedTask onTaskDrop={handleTaskDrop} />
                    </div>
                </div>
            </DndProvider>
        </div>
    );
};

export default TodoList;
