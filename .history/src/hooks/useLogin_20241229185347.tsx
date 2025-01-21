import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn as loginApi } from "../servises/AthenacationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


interface typeMutate{
        email:string,
        password:string
}
export default function useLogin() {
    const quryClient = useQueryClient();
    const navigate =useNavigate();

    const {mutate:login  }=useMutation({
        mutationFn:({email ,password} :typeMutate)=> loginApi({email , password}),
        onSuccess:(data)=>{
            quryClient.setQueryData(["user"] , data.user);
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
