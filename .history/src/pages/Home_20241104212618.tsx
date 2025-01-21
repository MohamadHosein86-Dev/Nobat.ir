import { useEffect } from "react";
import { fetchDoctors } from "../servises/getDoctors";

export default function Home() {

  useEffect(()=>{
    fetchDoctors();
  },[]);

  return (
    <div>
      <>kossss</>
    </div>
  )
}
