import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/pages/login/Login.jsx";
import SignUp from "./components/pages/signup/SignUp.jsx";
import Home from "./components/pages/home/Home.jsx";

function App() {

  return (
      <div className="p-4 h-screen flex justify-center items-center">
         {/*<Login/>*/}
          {/*<SignUp/>*/}
          <Home/>
      </div>
  )
}

export default App
