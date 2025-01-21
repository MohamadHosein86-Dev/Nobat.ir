import { useQuery } from "@tanstack/react-query";
import { getchDoctor } from "../servises/getDoctors";


interface typeId{
    id:string
}
export function useDoctor({id}:typeId) {
    
    const {data:doctor , isLoading:loadingDoctor} = useQuery({
        queryKey :["doctor"],
        queryFn:()=>getchDoctor({id})
    });

    return {doctor , loadingDoctor};
}