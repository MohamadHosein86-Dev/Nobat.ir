import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn as loginApi } from "../servises/AthenacationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export default function useLogin() {
    const quryClient = useQueryClient();
    const navigate =useNavigate();

    const {mutate:login }=useMutation({
        mutationFn:loginApi,

        onSuccess:(data)=>{
            quryClient.setQueryData(["user"] , data);
            localStorage.setItem("authToken", data.to)
            if(!data.session){
                toast.error(" ایمیل یا رمز را اشتباه وارد کردین ");
            }
            else{
                toast.success("شما با موفقیت وارد حسابتون شدید");
                navigate("/")
            }


        },
        onError:()=>{
            toast.error("پسورد یا ایمیل شما اشتباه هست");
        }
    })

    return {login };
}
