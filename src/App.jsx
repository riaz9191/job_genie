import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { toast } from 'react-hot-toast'
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      
      <Footer></Footer>
    </div>
  );
};

export default App;
