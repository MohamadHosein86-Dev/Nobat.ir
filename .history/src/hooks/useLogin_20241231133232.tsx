import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn as loginApi } from "../servises/AthenacationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export default function useLogin() {
    const quryClient = useQueryClient();
    const navigate =useNavigate();

    const {mutate:login ,isLoading }=useMutation({
        mutationFn:loginApi,

        onSuccess:(data)=>{
            
            if(!data){
                toast.error(" ایمیل یا رمز را اشتباه وارد کردین ");
            }
            else{
                quryClient.setQueryData(["user"] , data);
                localStorage.setItem("user", JSON.stringify(data));
                toast.success("شما با موفقیت وارد حسابتون شدید");
                navigate("/");
            }

        },
        onError:()=>{
            toast.error("پسورد یا ایمیل شما اشتباه هست");
        }
    })

    return {login ,isLoading };
}
