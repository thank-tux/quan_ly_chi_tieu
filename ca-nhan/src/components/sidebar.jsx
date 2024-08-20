import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast , faLayerGroup,faMoneyBill,faBook,faPaperclip} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link,Outlet } from 'react-router-dom';


export const SideBar = () => {
  return (
    <>
       
          <ul class=" h-[650px] w-[20%] absolute top-[80px] bg-white  ">
           <Link to={`/home/overview`}><li class="text-[20px] font-mono  text-center w-[80%] h-[60px] mt-[50px] rounded-md ml-[20px] flex justify-center items-center  text-slate-500  hover:bg-green-200 hover:text-green-700  duration-[0.5s]">
           <FontAwesomeIcon icon={faLayerGroup} />
              Tổng quan
            </li></Link>
            <Link to={`/home/Cost`}><li class="text-[20px] font-mono  text-center w-[80%] h-[60px] mt-[50px] rounded-md ml-[20px] flex justify-center items-center  text-slate-500  hover:bg-green-200 hover:text-green-700 duration-[0.5s] ">
            <FontAwesomeIcon icon={faMoneyBill} />
              Chi phí
            </li></Link>
            <Link to={``}><li class="text-[20px] font-mono  text-center w-[80%] h-[60px] mt-[50px] rounded-md ml-[20px] flex justify-center items-center  text-slate-500  hover:bg-green-200 hover:text-green-700 duration-[0.5s]">
            <FontAwesomeIcon icon={faBook} />
              cài đặt ngân sách
            </li></Link>
            <a href=""><li class="text-[20px] font-mono  text-center w-[80%] h-[60px] mt-[50px] rounded-md ml-[20px] flex justify-center items-center  text-slate-500  hover:bg-green-200 hover:text-green-700 duration-[0.5s]">
            <FontAwesomeIcon icon={faPaperclip} />
              Chi phí thường xuyên
            </li></a>
          </ul>
        
       
     
    </>
  );
};
