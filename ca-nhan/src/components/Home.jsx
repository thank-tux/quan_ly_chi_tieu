import React, { useState } from 'react';
import { SideBar } from "./sidebar";
import { Header } from "./navbar";
import { OverView } from "./overview";

import { Outlet } from 'react-router-dom';


export const Home = () => {
  
  return (
    <>
      <div class="">
        {/* <div class="">
          <Header />
        </div> */}
        <div class="">
          <OverView/>
        </div>
        <div class="">
          <SideBar />
        </div>
        <Outlet/>
      </div>

    </>
  );
};
