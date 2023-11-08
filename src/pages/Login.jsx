import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const { signIn, googleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // signIn(email, password)
    signIn(email, password)
      .then(() => {
       

        const user = { email };
        axios.post('https://study-group-server.vercel.app/jwt', user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate("/");
              toast.success("Login Successfully");

            }
          });
      })
      .catch((error) => toast.error(error.message));
  };
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Log in successfully");
        
        navigate("/");
      })

      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="hero mt-6">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-4xl text-center font-bold">Login Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
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
              placeholder="Your Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 p-0">
            <button
              type="submit"
              className="btn rounded-full bg-red-500 text-white hover:bg-red-500 text-white"
            >
              Login
            </button>
          </div>
          <div className="label-text flex justify-between">
            <label className="">Don't have an account?</label>
            <Link to="/register" className=" link link-hover">
              Register
            </Link>
          </div>
        </form>
        <div className="flex items-center justify-center mb-4">
          <button className="btn  rounded-full" onClick={handleGoogle}>
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
