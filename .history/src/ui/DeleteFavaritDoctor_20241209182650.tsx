import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteFavaritDoctor } from "../featchers/FavaritDoctorReducer";


interface idType{
    id:string
}
export default function DeleteFavaritDoctor(id:idType) {
    const dispatch = useDispatch();
    
    function handleHasFavarit() {
        dispatch(deleteFavaritDoctor(id));
        toast.success("");
    }

    return(
        <button className=" absolute top-[1rem]  left-[1.5rem] bg-[red] text-[white] text-sm font-bold p-[.7rem] rounded-[1rem] " onClick={handleHasFavarit}>حذف کردن از لیست مورد علاقه</button>
    )
    
}
