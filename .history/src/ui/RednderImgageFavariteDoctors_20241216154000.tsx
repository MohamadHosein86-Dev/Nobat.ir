import { useDispatch, useSelector } from "react-redux"
import { DoctorType } from "../servises/getDoctors";
import { Link } from "react-router-dom";
import { deleteFavaritDoctor } from "../featchers/FavaritDoctorReducer";
import toast from "react-hot-toast";


interface HasFavaritType{
    favaritDoctor:{
        favaritDoctors:DoctorType[]
    } 
  }
export default function RednderImgageFavariteDoctors() {

  const dispatch = useDispatch();

  function handleHasFavarit(id:string) {
      dispatch(deleteFavaritDoctor(id));
      toast.success("با موفقیت از لیست موردعلاقه حذف شد");
  }


  const {favaritDoctors} = useSelector((state:HasFavaritType)=> state.favaritDoctor);
  if(!favaritDoctors || favaritDoctors.length === 0 )return null;
  
  return (
    <div className=" flex flex-col gap-[2.5rem]">
            { favaritDoctors.map((res)=>
                      <div key={res.id} className=" relative flex justify-center items-center rounded-[1.3rem] border-[#ffff] border-[4px] custom_shadow6 mt-[-1rem] w-[100%] bg-[#f9f9f9] h-[18rem]">
                          <button onClick={()=>handleHasFavarit(res.id)} className=" transition custom_shadow7 absolute top-[1rem]  left-[1.5rem] pb-[1rem] bg-[red] text-[white] text-sm font-bold p-[.7rem] rounded-[50%] h-[4.5rem] ">حذف کردن</button>
                          <Link to={`/${res.id}`} className=" flex flex-col">
                            <img className=" rounded-[50%] w-[8rem] h-[8rem] object-cover" src={res.image} alt="" />
                            <h3>دکتر{res.name}</h3>
                          </Link>
                      </div>
                )
            }
    </div>
  )
}
