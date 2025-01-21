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
  /* 
          align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    bottom: 0;
    box-shadow: 0 3px 6px 0 #00000029;
    color: #000;
    display: flex
;
    font-size: 1.5rem;
    height: 2.5rem;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    width: 2.5rem;
  */
  return (
    <div className=" flex flex-col gap-[2.5rem]">
            { favaritDoctors.map((res)=>
                      <div key={res.id} className=" relative flex justify-center items-center rounded-[1.3rem] border-[#ffff] border-[4px] custom_shadow6 mt-[-1rem] w-[100%] bg-[#f9f9f9] h-[18rem]">
                          <button onClick={()=>handleHasFavarit(res.id)} className=" transition custom_shadow7 absolute top-[1rem]  left-[1.5rem] pb-[1rem] bg-[red] text-[white] text-sm font-bold p-[.7rem] rounded-[50%] h-[4.5rem] ">حذف کردن</button>
                          <div  className=" flex flex-col items-center">
                            <div className=" relative">
                                <img className=" rounded-[50%] w-[8rem] h-[8rem] object-cover" src={res.image} alt="" />
                                 <button className=" flex items-center bg-[#fff] border-none rounded-[50%] bottom-[0] justify-center w-[2.5rem] text-[#000] text-[1.5rem] h-[2.5rem] absolute custom_shadow8">
                                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg>
                                 </button>
                            </div>
                            <Link to={`/${res.id}`}>
                              <h3 className=" hover:text-[#007bff] transition text-[#005761] text-sm font-bold ">متخصص {res.specialty}</h3>
                              <h3 className=" mt-[.6rem] hover:text-[#007bff] transition font-semibold ">دکتر{res.name}</h3>
                            </Link>
                          </div>
                      </div>
                )
            }
    </div>
  )
}
