import React from "react";
import Demo from "./Components/Demo.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ButtonClick from "./Components/ButtonClick.jsx";
import ListDemo from "./Components/ListDemo.jsx";
import Loading from "./Components/Loading.jsx";
import FormControl from "./Components/FormControl.jsx";
import LearnState from "./Components/LearnState.jsx";
import Hooks from "./Components/Hooks.jsx";
import User from "./Components/User.jsx";

function App() {
  const isDemo = false;
  const isLogin = true;
  return (
    <>
      <Navbar />
      {isDemo ? <Demo /> : <Home />}
      <Footer />
      {/* <ButtonClick /> */}
      {/* {isLogin ? <ListDemo /> : <h1>Please log in to see the content</h1>} */}
      {/* {isLogin && <ListDemo />} */}
      {/* <Loading /> */}
      {/* <FormControl /> */}
      {/* <LearnState /> */}
      {/* <Hooks /> */}
      {/* <User /> */}
    </>
  );
}

export default App;

