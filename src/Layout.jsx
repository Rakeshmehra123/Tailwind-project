import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="bg-zinc-700 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
