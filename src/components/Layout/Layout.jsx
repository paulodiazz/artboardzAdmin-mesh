import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { useRouter } from 'next/router';


const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className={router.pathname == "/" ? "block" : "grid grid-rows-layout grid-cols-layout min-h-screen bg-slate-800 w-full h-fit"}>
      <Header />
      <Navbar className={router.pathname == "/" ? "hidden" : "block"}/>
      <main className={router.pathname == "/" ? "block" : "bg-white flex items-center h-full relative"}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
