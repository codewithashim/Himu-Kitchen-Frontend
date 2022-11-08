import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../Assets/auth_img.svg";
import useTitle from "../../Hooks/useTitle";
// import UseFirebase from "../../Hooks/UseFirebase";

const Register = () => {
  useTitle("Register");
  // const { handelGoogleLogin, handelFacebookLogin, handelEmailSignUp } =
  //   UseFirebase();
  return (
    <section>
      <div className="hero min-h-screen w-full mx-auto bg-base-200">
        <div className="hero-content grid md:grid-cols-2">
          <div className="text-center md:w-2/4">
            <img src={login} alt="login now" />
          </div>

          <div className="md:w-3/4 border rounded p-6 shadow">
            <form action="">
              <div>
                <h2 className="card-title text-center">Sign Up</h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="fullname"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  required
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
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
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div>
                <Link className="btn btn-link" to="/login">
                  <span> Already have an account ? </span> Login Now
                </Link>
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-warning"
                />
              </div>
            </form>
            <div className="socialLogin flex justify-center items-center gap-2 mt-3">
              <Link>
                <FaGoogle className="text-4xl hover:-translate-y-1 transition-all bg-blue-300 text-white p-2 rounded-full"></FaGoogle>
              </Link>
              <Link>
                <FaFacebookF className="text-4xl hover:-translate-y-1 transition-all  bg-blue-300 text-white p-2 rounded-full"></FaFacebookF>
              </Link>
              <Link>
                <FaTwitter className="text-4xl hover:-translate-y-1 transition-all  bg-blue-300 text-white p-2 rounded-full"></FaTwitter>
              </Link>
              <Link>
                <FaLinkedin className="text-4xl hover:-translate-y-1 transition-all  bg-blue-300 text-white p-2 rounded-full"></FaLinkedin>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
