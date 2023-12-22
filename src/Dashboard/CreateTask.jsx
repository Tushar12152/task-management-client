import swal from "sweetalert";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import Title from "../API's/Title";

const CreateTask = () => {



    const { user } = useAuth();
    const userEmail = user?.email;
    const axiosSecure = useAxiosSecure();
  
    const { data = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/${userEmail}`);
        return res.data;
      }
    });
  
    const [category, setCategory] = useState('breakfast');
  
    const handleSelectChange = (event) => {
      setCategory(event.target.value);
    };
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
    const onSubmit = async (data) => {
    //   try {
       
  
        const task = { ...data, Category: category };
    console.log(task);
    //     const res = await axiosSecure.post('/Tasks', task);
    //     if (res?.data?.insertedId) {
    //       swal("Wow!", "Your Task is uploaded Successfully", "success");
    //       reset();
    //     }
    //   } catch (error) {
    //     console.error('Error upload img', error);
    //   }
    };
  
  


    return (
        <div>
        <Title heading={'Careate Task'}></Title>
           <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
    <div className="lg:flex gap-4">
    <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input   {...register("Title")} type="text" placeholder="Meals Title" className="input input-bordered"  required />
      </div>

    <div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input  {...register("description")} type="text" placeholder="Description" className="input input-bordered" required />
      </div>
    </div>






  


    <div className="lg:flex gap-4">
    {/* <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Image</span>
        </label>
        <input {...register("image")} type="file" placeholder=""   accept='image/*' id="image" className="input input-bordered" required />
      </div> */}


<div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input   {...register("date")} type="date" placeholder="Date" className="input input-bordered" required />
      </div>


    <div className="form-control  w-[50%]">
        
        <label htmlFor="selectOption">Priority</label>
    <select className="input input-bordered" id="category" name="category" value={category} onChange={handleSelectChange}>
      <option value="low">Low</option>
      <option value="moderate">Moderate</option>
      <option value="high">High</option>
  
    </select>
      </div>
    </div>


        <div className="form-control mt-2 w-[100%]">
          <input
            type="submit"
            value="Add Task"
            className="input input-bordered bg-[#6069a6] cursor-pointer text-white"
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>

      <div className="form-control mt-2 w-[100%]">
       
      </div>
    </div>



        </div>
    );
};

export default CreateTask;