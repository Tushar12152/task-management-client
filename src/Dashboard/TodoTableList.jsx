import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "../API's/Title";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const TodoTableList = () => {
     const {user}=useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: fetchedTasks = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`);
            return res.data;
        },
    });

    // console.log(fetchedTasks);


    const task=fetchedTasks.filter(task=> task.email==user?.email)

    // console.log(task);

    const handleOngoing=(id)=>{
        // console.log(id);
        const status={
            status:'ongoing'
        }
        axiosSecure.patch(`/tasks/${id}`,status)
        .then(res=>{
             if(res?.data?.modifiedCount>0){
                     toast.success('Your Task is added to Ongoing list')
             }
        })
    }

    const handleComplete=id=>{
        const status={
            status:'complete'
        }
        axiosSecure.patch(`/tasks/${id}`,status)
        .then(res=>{
             if(res?.data?.modifiedCount>0){
                     toast.success('Your Task is added to complete list')
             }
        })
    }




    return (
        <div>
            <Title heading={'To-Do List '}></Title>
            

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-10">
                    {task.map(item=><div key={item._id} className="card w-72 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{item?.Title}</h2>
    <p>{item?.description}</p>
    <p>Name:{item?.name}</p>
    <p>Email: {item?.email}</p>
   
    <div className="card-actions justify-end">
      <button onClick={()=>handleOngoing(item?._id)} className="btn bg-[#6069a6]">On going</button>
      <button onClick={()=>handleComplete(item?._id)} className="btn bg-[#6069a6]">Complete</button>
    </div>
  </div>
</div>)} 
             </div>


        </div>
    );
};

export default TodoTableList;