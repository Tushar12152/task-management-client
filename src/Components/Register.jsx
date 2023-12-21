import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

// import useAuth from "../Hooks/useAuth";
// import toast from "react-hot-toast";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import { imageUpload } from "../API's/ImageUpload";



const Register = () => {

    const [show,setShow]=useState(false)
    // const {createUser,user}=useAuth()
    // const axiosSecure=useAxiosSecure()
    // const userMail=user?.email


const handleRegister=async(e)=>{
       e.preventDefault()
       const form=e.target;

      


        const name= form.name.value;
        const photo= form.photo.files[0]
        const img= await imageUpload(photo)
        const image=img?.data?.display_url
        const email=form.email.value;
        const password=form.password.value;

        // const usersInfo={
        //    image,name,
        // }
     


//         createUser(email,password)
//         .then(res=>{
//               if(res.user){
               
//                 axiosSecure.post('/users',usersInfo)
//                 .then(res=>{
//                     if(res.data.insertedId){
//                         toast.success('Registration complete')
//                     }
//                 })
                 
//               }
//         })
//         .catch(err=>{
//              toast.error(err.message);
//         })
        
        console.log(name,image,email,password);
}




    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
                required
                type='file'
                id='image'
                name='photo'
                accept='image/*'
              />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative ">
          <input type={show?"text":"password"} name="password" placeholder="password" className="input input-bordered w-full" required />
           <span onClick={()=>setShow(!show)} className="absolute top-4 right-1">{ show? <AiFillEye/>:<AiFillEyeInvisible/>}</span>
          </div>
          <label className="label">
            <p> Already have an Account? please <Link className=" text-[#6069a6]" to='/login'>Log In</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#6069a6] text-white ">Register</button>
        </div>
      </form>
       <div>
           <h1 className="text-center font-bold text-lg text-[#6069a6] border-b-2  border-[#6069a6] w-60 mx-auto pb-2">Sign Up With</h1>

           <div className="ml-36"> 
              <span className=" text-2xl p-1   text-[#6069a6]"> <AiOutlineGoogle/></span>
           </div>
       </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;