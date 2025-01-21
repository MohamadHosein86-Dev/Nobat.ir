import { useDispatch } from "react-redux";
import toast from "react-hot-toast";


export default function DeleteFavaritDoctor() {
    const dispatch = useDispatch();
    
    function handleHasFavarit() {
        dispatch(deleteFavaritDoctor());
        toast.success("");
    }

    return(
        <button className=" absolute top-[1rem]  left-[1.5rem] bg-[red] text-[white] text-sm font-bold p-[.7rem] rounded-[1rem] " onClick={handleHasFavarit}>حذف کردن از لیست مورد علاقه</button>
    )
    
}
