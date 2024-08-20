import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Root from "./routes/root";
import Contact from "./routes/contact";
import { SideBar } from "./components/sidebar.jsx";
import { Header } from "./components/navbar.jsx";
import { OverView } from "./components/overview.jsx";
import { Hero } from "./components/hero.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/login.jsx";
import { Signup } from "./components/signup.jsx";
import { Home } from "./components/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js"
import { Cost } from "./components/cost.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home/>,
        children: [
          {
            path: "/Home/Cost",
            element: <Cost/>
          },
          {
            path: "/Home/overview",
            element:<OverView/>
          },
        ]
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store= {store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
