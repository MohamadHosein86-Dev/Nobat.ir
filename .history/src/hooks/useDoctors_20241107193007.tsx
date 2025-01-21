import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";

export default function useDoctors() {
    const [serchparams]=useSearchParams();
    const filterByCity = serchparams.get("filterByCity");
    
    const {data:doctors , isLoading} = useQuery({
        queryKey:["doctors"],
        queryFn:()=>getchDoctors({})
    });
    console.log(doctors);
    
    return {doctors , isLoading};
}
