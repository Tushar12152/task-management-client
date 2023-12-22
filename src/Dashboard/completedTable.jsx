import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const CompletedTable = () => {

    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: fetchedTasks = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`);
            return res.data;
        },
    });

    const task=fetchedTasks.filter(task=> task.email==user?.email)

    // console.log(task);
    const complete=task.filter(item=>item.status=='complete')



    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Added  by</th>
      </tr>
    </thead>
    <tbody>
      {
      complete.map((item,idx)=> <tr key={item._id}>
      <th>{idx+1}</th>
      <td>{item?.Title}</td>
      <td>{item?.Priority}</td>
      <td>{item?.status}</td>
      <td>{item?.email}</td>
    </tr>)
      
      }
     
     
      
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default CompletedTable;