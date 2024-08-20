import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Form, Input,notification } from 'antd';
import { faTruckFast, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { createUserApi } from "../util/api";
import { Navigate, useNavigate } from "react-router-dom"; 
export const Signup = ({ onCloseSignup }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isShowSinup , setisShowSinup] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    const res = await createUserApi(formData.email, formData.password ,formData.username);
    console.log('Success:', res);
    if(res){
      notification.success({
        message: "đăng ký thành công",
        description:"success",
      })
      navigate("/login");
      setisShowSinup(true);
    }else{
      notification.error({
        message:"đăng kí không thành công",
        description:"error",
      })

    }
  };
  return (
    !isShowSinup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-green-50 w-[40%] rounded-xl  top-[150px] left-[450px] z-10 absolute ">
        <span className=" absolute top-1 right-1 text-[30px] text-green-900">
          <button onClick={onCloseSignup}>
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
        </span>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl text-green-900 font-bold sm:text-3xl">
              Đăng kí tại đây
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
              <label htmlFor="name" className="sr-only">
                name
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-100 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
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
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                type="button"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
    
  );
};
