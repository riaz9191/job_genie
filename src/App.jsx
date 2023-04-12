import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { toast } from 'react-hot-toast'
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ScrollToTop />
      {/* <footer></footer> */}
    </div>
  );
};

export default App;
