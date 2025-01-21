import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";

export default function useDoctors() {
 
    
    const {data:doctors , isLoading} = useQuery({
        queryKey:["doctors"],
        queryFn:getchDoctors
    });
    console.log(doctors);
    
    return {doctors , isLoading};
}
