import { useMutation } from "@tanstack/react-query";
import { logIn as loginApi } from "../servises/Athenacation";

interface typeMutate{
    email:string ,  password:number
}
export default function useLohin() {
    const {mutate ,i}=useMutation({
        mutationFn:({email ,  password}:typeMutate)=> loginApi({email , password})
    })

    return {};
}
