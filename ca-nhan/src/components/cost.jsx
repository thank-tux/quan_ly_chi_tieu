import React, { useEffect, useState } from 'react';
import Modal from './modalAddNew';
import {notification} from 'antd'
import { createCostApi} from '../util/api'
import { getCostApi } from '../util/api';
export const Cost = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [formData, setFormData] = useState({
      eventdate: "",
      description:"",
      price: "",
      category: ""
    });
    const [dataSource, setDataSource] = useState([])
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = async () => {
      console.log("Form Data:", formData);
      const res = await createCostApi(formData.eventdate,formData.description ,formData.price,formData.category);
      console.log('Success:', res);
      if(res){
        notification.success({
          message: "thêm thành công",
          description:"",
        })
      }else{
        notification.error({
          message:"thêm không thành công",
          description:"error",
        })
      }
    };
    useEffect(()=> {
      const fetchData = async () => {
        const res = await getCostApi();
        if(res && res.data) {
          setDataSource(res.data);
          console.log(res.data);
        }else{
          console.log("kết nối không thành công" , error)
        }
      }
      fetchData();
    },[]);
  return (
    <div className="w-[80%] h-[90%] absolute right-0 bottom-0 bg-gray-50">
      <a className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 absolute top-[40px] right-[50px]  " href="#"
      onClick={openModal}
    >
        Thêm chi phí
      </a>
      <div className="overflow-x-auto absolute top-[120px] left-5 w-[90%] h-[80%]">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="">
          
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ngày
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                mô tả
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                tiền
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                danh mục
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
          {dataSource && dataSource.length > 0 && dataSource.map((item, index) => {
            return (
              <tr key={`costs-${index}`}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.eventdate}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.category}
              </td>
            </tr>
              
            )

          })}
            
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className="text-center font-mono text-[24px] tracking-tighter ">thêm chi phí tại đây</h2>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium ">
              thời gian
            </label>

            <input
              type="date"
              id="eventdate"
              name="eventdate"
              onChange={handleChange}
              value={formData.eventdate}
              className="mt-1 w-full  h-[30px] rounded-md border-gray-200 bg-white text-xm shadow-xm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium ">
              giá
            </label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={handleChange}
              value={formData.price}
              className="mt-1 w-full  h-[30px] rounded-md border-gray-200 bg-white text-xm shadow-sm"
            />
          </div>
          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium"> mô tả </label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              className="mt-1 w-full h-[30px] rounded-md border-gray-500 bg-white text-xm shadow-sm"
            />
          </div>

          <div className="">
            <label htmlFor="" className="block text-sm font-medium w-[200px] "> danh mục </label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={handleChange}
              value={formData.category}
              className="mt-1 h-[30px] rounded-md border-gray-200 bg-white text-xm shadow-sm "
            />
          </div>
        </form>
                <div class=" relative left-[200px]  ">
                <button
                    className="mt-4 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-700 mr-[10px]"
                    onClick={closeModal}
                >Close</button>
                <button
                    className="mt-4 px-5 py-2 bg-red-700 text-white rounded hover:bg-red-900"
                    onClick={handleSubmit}
                >Thêm</button>
                  
                </div>
    </Modal>
    </div>
    
  );
};
