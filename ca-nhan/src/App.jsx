import { useState, useEffect } from "react";
import axios from "./util/axios.customize";
import { Outlet } from "react-router-dom";
import { Home } from "./components/Home";
import { connect } from "react-redux";
import { Hero } from "./components/hero";
import { Header } from "./components/navbar";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { increaseCounter, decreaseCounter } from "./action/actions";

function App() {
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}`).then((res) => {
      console.log("hrhr", res.data);
    });
  }, []);
  const [count, setCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const openSingup = () => {
    setShowLogin(false);
    setShowSingUp(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };
  const CloseSignup = () => {
    setShowSingUp(false);
  };

  return (
    <>
      <main>
          <div class=""><Header onLoginClick={handleLoginClick} /></div>
          {showLogin && <Login openSingup={openSingup} onClose={handleClose} />}
          {showSingUp && <Signup onCloseSignup={CloseSignup} />}
          <div class=""><Hero /></div>
      </main>
      <Outlet />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
