import { useState } from "react";
import logo from "./assets/logo.svg";
import eyeIcon from "./assets/AiFillEye.svg";
import googleIcon from "./assets/Rectangle.svg";
import facebookIcon from "./assets/facebook.svg";
import contentImage from "./assets/main-right.svg";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <section className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-12">
        <div className="max-w-md mx-auto w-full">
          <div className="flex justify-start mb-16 lg:-ml-12 md:-ml-8">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Sign in
            </h1>
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <span className="font-bold text-gray-800">Create now</span>
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="mail" className="block text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="mail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label htmlFor="pass-word" className="block text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="pass-word"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 border-l border-l-[#CFD9E0]"
                >
                  <img
                    src={eyeIcon}
                    alt="toggle password visibility"
                    className="w-6 h-6 mx-2"
                  />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-green-800 font-semibold">
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-green-800 text-white font-bold py-3 rounded-lg hover:bg-green-900 transition duration-300">
              Sign in
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-2xl hover:bg-gray-50 transition duration-300">
              <img src={googleIcon} alt="google" className="mr-4" />
              Continue With Google
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-2xl hover:bg-gray-50 transition duration-300">
              <img src={facebookIcon} alt="facebook" className="mr-4" />
              Continue With Facebook
            </button>
          </div>
        </div>
      </section>

      <section className="hidden md:flex md:w-1/2 lg:w-1/2 bg-green-800 md:gap-y-8 flex-col justify-between p-12">
        <div className="text-center text-white flex justify-center items-center gap-x-3">
          <small className="font-bold text-lg">Support</small>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center lg:w-3/4">
            <img src={contentImage} alt="slide-image" className="" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <IoChevronBackOutline />
            </button>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <button className="text-white hover:text-gray-200">
              <IoChevronForwardOutline />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
