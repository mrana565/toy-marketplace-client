/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import PageTitle from "../PageTitle/PageTitle";

const Login = () => {
  const { loginWithGoogle, login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
    form.reset();
  };

  const handleLoginGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      <PageTitle title="login" />
      <div className="Container">
        <div className="md:w-1/2 mx-auto">
          <h2 className="text-2xl py-8 text-[#405a7f]">Please login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="inline-block mb-2 text-lg">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                required
                className="input input-bordered input-info w-full block"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="inline-block mb-2 mt-4 text-lg"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter your password"
                required
                className="input input-bordered input-info w-full block"
              />
            </div>
            {error ? (
              <div className="alert alert-error shadow-lg mt-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error.message}</span>
                </div>
              </div>
            ) : (
              ""
            )}
            <button type="submit" className="Btn-fill w-full my-5 ">
              Login
            </button>
          </form>
          <p className="text-lg mb-5">
            Don't Have An Account
            <Link to="/register" className="text-blue-800 underline ms-3">
              please register
            </Link>
          </p>
          <div>
            <p
              onClick={handleLoginGoogle}
              className=" border border-teal-600  py-2 mb-3 text-center text-lg cursor-pointer rounded"
            >
              <FaGoogle className="inline-block me-2 text-2xl" /> Login with
              google
            </p>
            <p className=" border border-teal-600  py-2 mb-3 text-center text-lg cursor-pointer rounded">
              <FaGithub className="inline-block me-2 text-2xl" />
              Login with github
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
