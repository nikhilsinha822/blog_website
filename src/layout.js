import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
const Layout = ({search, setSearch}) => {
  return (
    <>
      <Header title="React.js Blog"/>
      <Navbar search={search} setSearch={setSearch}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
