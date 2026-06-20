import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <header className=" lg:max-w-[90%] mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="max-w-[96%] lg:max-w-[90%] mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="bg-black">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
