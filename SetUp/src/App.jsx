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
import { Routes, Route } from "react-router-dom";
import UserDetail from "./Components/UserDetail.jsx";

function App() {
  const isDemo = false;
  const isLogin = true;
  return (
    <>
      {/* <Navbar />
      {isDemo ? <Demo /> : <Home />}
      <Footer /> */}
      {/* <ButtonClick /> */}
      {/* {isLogin ? <ListDemo /> : <h1>Please log in to see the content</h1>} */}
      {/* {isLogin && <ListDemo />} */}
      {/* <Loading /> */}
      {/* <FormControl /> */}
      {/* <LearnState /> */}
      {/* <Hooks /> */}
      {/* <User /> */}

      {/* Routing */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<FormControl/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/users/:id" element={<UserDetail/>}/>
        <Route path="/home/users" element={<User/>}/>
        <Route path="/contact/form" element={<ListDemo/>}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;

