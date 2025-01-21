import { useQuery } from "@tanstack/react-query";
import { getchDoctor } from "../servises/getDoctors";



export function useDoctor() {
    
    const {data:doctor , isLoading:loadingDoctor} = useQuery({
        queryKey :["doctor"],
        queryFn:()=>getchDoctor({id})
    });

    return {doctor , loadingDoctor};
}