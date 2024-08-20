import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
export const Header = ({ onLoginClick }) => {
  return (
    <>
      <div class=" relative ">
        <div class="w-[100%] flex justify-around absolute h-[70px]">
          <h1 class="text-green-900 font-sans text-[24px] flex items-center  ">
            <FontAwesomeIcon icon={faTruckFast} style={{ color: "#1A5319" }} />
            Quản lý chi tiêu
          </h1>
          <div className="flex items-center">
            <label class="relative flex justify-center w-[300px] right-[50px] h-[40px]">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input
                class="placeholder:italic placeholder:text-slate-400  bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div class="text-[24px] absolute right-[10%] flex items-center h-[100%] ">
            <button onClick={onLoginClick}>
              {" "}
              <FontAwesomeIcon icon={faUser} />{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
