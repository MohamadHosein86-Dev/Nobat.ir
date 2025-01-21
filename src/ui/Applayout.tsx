import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Applayout() {
  return (
    <section> 
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}
