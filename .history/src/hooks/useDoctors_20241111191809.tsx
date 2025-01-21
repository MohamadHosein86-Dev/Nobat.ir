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
    if(city) {
       doctors = data?.filter((item)=> city === "" ?  item : item.address.split("،")[0] == city);
    }
    if(specialty){
        doctors = data?.filter((item)=> specialty === "" ? item : item.specialty === specialty);
    }
    
    return {doctors  , isLoading};
}
