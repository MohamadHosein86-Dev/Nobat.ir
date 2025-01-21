import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";


interface HasFavaritType{
    favaritDoctor:{
        favaritDoctors:object[]
    } 
}
export default function IsShowFavDoctor() {
    const {authenticatd}=useUser(); 
    const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);

    if(authenticatd && favaritDoctors.length !== 0) return (
             <Link to={"/user.nobat.ir/favarite"} className=" w-[50%] custom_shadow5 bg-[#fbfbfb] flex items-center justify-center rounded-[1.1rem] flex-col-reverse p-[.5rem] ">
                  <span> لیست مورد علاقه من</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                  </span>
             </Link>
    )
}
