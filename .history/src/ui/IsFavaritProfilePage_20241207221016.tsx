import { useDispatch } from "react-redux";
import { toggleFavaritDoctor } from "../featchers/FavaritDoctorReducer";
import toast from "react-hot-toast";


export default function DeleteFavaritDoctor() {
    const dispatch = useDispatch();
    function handleHasFavarit() {
        dispatch(toggleFavaritDoctor(doctor));
        toast.success("");
    }

    return(
        <button onClick={handleHasFavarit}>حذف کردن از لیست مورد علاقه</button>
    )
    
}
