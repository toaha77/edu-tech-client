import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
 import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
 
const Register = () => {
   const { createUser, googleLogin, handleProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // createUser(email, password)

    createUser(email, password)
      .then(() => {
        handleProfile(name, image)
        .then(()=>{
         toast.success('Register Successfully')
         navigate('/')
        })
      })
      .catch(( error) =>  {
     toast.error(error.message)
      });
  };

  //  google login
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Register successfully");
        navigate('/')
      })

         .catch((err) => {
           toast.error(err.message);
         });
  };
  return (
    <div className="hero min-h-screen pt-4 bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-4xl text-center font-bold">Register Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="image url"
              className="input input-bordered"
              name="img"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 p-0">
            <button type="submit" className="btn rounded-full bg-red-500 text-white hover:bg-red-500 text-white">
              Register
            </button>
          </div>
        <div className="label-text flex justify-between">
        <label className="">
            Already have an account?
            
          </label>
          <Link to="/login" className=" link link-hover">
              Login
            </Link>
        </div>
        </form>
        <div className="flex items-center justify-center mb-4">
          <button className="btn rounded-full " onClick={handleGoogle}>
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;