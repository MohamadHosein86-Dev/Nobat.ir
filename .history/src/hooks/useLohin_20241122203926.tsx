import { useMutation } from "@tanstack/react-query";
import { logIn as loginApi } from "../servises/Athenacation";

export default function useLohin() {
    const {mutate ,i}=useMutation({
        mutationFn:({})=> loginApi(infor)
    })

    return {};
}
