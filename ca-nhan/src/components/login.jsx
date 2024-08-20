import React, { useState } from 'react';
import { Button, Checkbox, Form, Input,notification } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 
import { loginApi} from "../util/api"

export const Login = ({ onClose, openSingup,handleLogin}) => {
  const [formData, setFormData] = useState({  
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const res = await loginApi(formData.email,formData.password);
    if(res.data && res.data.EC === 0){
      notification.success({
        message: "đăng nhập thành công",
        description:"Success"
      });
      navigate("/home");
      setIsLoggedIn(true);
    }else{
      notification.error({
        message:"đăng nhập không thành công",
        description: res.data?.EM ?? "error"
      })
    }
  };
  
  return (
    !isLoggedIn && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-green-50 w-[40%] rounded-xl  top-[150px] left-[450px] z-10 absolute  "
      onSubmit={handleLogin}>
        <span
          className=" absolute top-1 right-1 text-[30px] text-green-900"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faDeleteLeft} />
        </span>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl text-green-900 font-bold sm:text-3xl">
              Đăng nhập tại đây
            </h1>
            <div className=" text-[24px]">
              <FontAwesomeIcon
                icon={faTruckFast}
                style={{ color: "#1A5319" }}
              />
            </div>
          </div>
          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-100 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                 
                  
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <button onClick={openSingup}>Sign up</button>
              </p>

              <button
                onClick={handleSubmit}
                type="button"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  );
};
