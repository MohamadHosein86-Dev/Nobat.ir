import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../servises/AthenacationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export default function useSignUp() {
    const navigate = useNavigate();
    const {  mutate:signUp ,isLoading}= useMutation({
        mutationFn:signUpApi,
        onSuccess:(data)=>{ 
                
                localStorage.setItem("user",JSON.stringify(data));
                toast.success(" با موفقیت حساب تان را ساختین");
                navigate("/");    
        },
        onError:()=>{
            toast.error(" لطفا ایمیل و رمز درست وارد کنید ")
        }
        
    })

    return {signUp ,isLoading};
}
