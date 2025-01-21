import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";

export default function useDoctors() {
    const [searchParams ]=useSearchParams();
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";
    

    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search],
        queryFn:getchDoctors
    });
    
    let doctors ;
    doctors = data?.filter((res)=> city == null ? res : res.address.split("،")[0] == city ).filter((item)=> specialty === "" ? item : item.specialty === specialty );
    doctors = data?.filter((item)=> specialty == null ? item : item.specialty === specialty);
    
    
    return {doctors   , isLoading};
}
