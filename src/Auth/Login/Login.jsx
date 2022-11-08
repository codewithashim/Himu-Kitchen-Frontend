import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import "../Styles/AuthStyles.css";
import authImg from "../../Assets/auth_img.svg";
import UseFirebase from "../../Hooks/UseFirebase";

const Login = () => {
  useTitle("Login");
  const { handelGoogleLogin, handelFacebookLogin, handelEmailSignIn } =
    UseFirebase();
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid md:grid-cols-2">
          <div className="text-center lg:text-left">
            <img src={authImg} alt="Login" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="card-title py-2 text-4xl font-bold text-yellow-400">
                Login <FaUserShield></FaUserShield>
              </h2>

              <form action="" onSubmit={(event) => handelEmailSignIn(event)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div>
                  <Link to="/signup " className="btn btn-link ">
                    I have't account Register Now
                  </Link>
                </div>
                <div className="form-control mt-3">
                  <button type="submit" className="btn btn-warning">
                    Login
                  </button>
                </div>
              </form>
              <div className="socialLogin flex justify-center items-center gap-2 mt-3">
                <Link onClick={handelGoogleLogin}>
                  <FaGoogle className="text-4xl hover:-translate-y-1 transition-all bg-blue-300 text-white p-2 rounded-full"></FaGoogle>
                </Link>
                <Link onClick={handelFacebookLogin}>
                  <FaFacebookF className="text-4xl hover:-translate-y-1 transition-all  bg-blue-300 text-white p-2 rounded-full"></FaFacebookF>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
