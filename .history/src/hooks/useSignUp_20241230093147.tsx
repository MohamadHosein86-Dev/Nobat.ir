import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../servises/AthenacationApi";
import toast from "react-hot-toast";



export default function useSignUp() {

    const {  mutate:signUp ,isLoading}= useMutation({
        mutationFn:signUpApi,
        onSuccess:(data)=>{ 
            
                toast.success(" با موفقیت حساب تان را ساختین");    
             
        },
        onError:()=>{
            toast.error(" لطفا ایمیل و رمز درست وارد کنید ")
        }
        
    })

    return {signUp ,isLoading};
}
