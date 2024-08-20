import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faBook,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getProructApi } from "../util/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 2",
      data: [100, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "button",
    },
    title: {
      display: true,
      text: "biểu đồ",
    },
  },
};

export const OverView = (props) => {
  const [dataSource, setDataSource] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProructApi();
      if (res && res.data) {
        setDataSource(res.data);
        console.log(res.data);
      } else {
        console.log("lỗi khi kết nối");
      }
    };
    fetchData();
  },[]);
 
  return (
    
    <>
      <div class="  w-[80%] h-[90%] absolute right-0 bottom-0 bg-gray-50 ">
        <div class="flex justify-around w-1/2 mt-20 ml-20">
          <div class=" border-slate-300 border-2 rounded-md w-[80%] h-[100px] relative bg-white">
            <h3 class=" ml-5 mt-5 font-mono text-[18px]">Chi phí</h3>
            <h1 class="ml-5 font-bold text-[24px]">$123</h1>
            <div class="absolute right-7 top-6 text-[35px] text-green-700 ">
              <FontAwesomeIcon icon={faPiggyBank} />
            </div>
          </div>
          <div class="border-slate-300 border-2 rounded-md w-[80%] h-[100px] relative bg-white ml-10 ">
            <h3 class=" ml-5 mt-5 font-mono text-[18px]">Tổng Chi phí</h3>
            <h1 class="ml-5 font-bold text-[24px]">$12345</h1>
            <div class="absolute right-7 top-6 text-[35px] text-green-700 ">
              <FontAwesomeIcon icon={faBook} />
            </div>
          </div>
        </div>
        <div
          className="max-w-2xl mx-auto "
          class="w-[600px] h-[400px] bg-white ml-[70px] mt-10 rounded-md border-slate-300 border-2"
        >
          <Bar data={data} options={options} />
        </div>
        <div class=" absolute top-20 right-10 bg-white h-[550px]  ">
          <table class="table-auto w-[450px] rounded-md">
            <thead>
              <tr class=" bg-slate-300 h-[50px]">
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>delete</th>
              </tr>
            </thead>
              <tbody>
            {dataSource && dataSource.length > 0 && 
            dataSource.map((item, index)=> {
              return (
                <tr key={`products-${index}`} >
                  <td class="h-[40px] text-center">{item.name}</td>
                  <td class="h-[40px] text-center">{item.eventDate}</td>
                  <td class="h-[40px] text-center">{item.price}</td>
                  <td class="h-[40px] text-center text-red-600">
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              )
            })
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
