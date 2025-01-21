import { useQuery } from "@tanstack/react-query";
import { getchDoctor } from "../servises/getDoctors";

function useDoctor() {
    
    const {data:doctor , isLoading:loadingDoctor} = useQuery({
        queryKey :["doctor"],
        queryFn:()=>getchDoctor()
    });

    return {doctor , loadingDoctor};
}