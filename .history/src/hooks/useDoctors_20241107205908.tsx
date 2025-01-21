import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";

export default function useDoctors() {
    const [searchParams , setSearchparams]=useSearchParams();
    const city = searchParams.get("city") || "";

    const {data , isLoading} = useQuery({
        queryKey:["doctors"],
        queryFn:getchDoctors
    });
    
    const doctors = city ? data?.filter((item)=>item.address.split("") == city ) : data;
    
    return {doctors  , isLoading};
}
