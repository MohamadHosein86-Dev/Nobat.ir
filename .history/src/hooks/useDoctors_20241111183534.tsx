import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";

export default function useDoctors() {
    const [searchParams ,setSearchParams]=useSearchParams();
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";

    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search],
        queryFn:getchDoctors
    });


    let doctors;
    
    if(search){
        const searchDoctors = data?.filter((item)=> search === "" ? item : item.name.includes(search));
        doctors = searchDoctors;
        setSearchParams({search});
    }
    else if(city || specialty){
        const doctorsFilter =  data?.filter((res)=> city === "" ? res : res.address.split("،")[0] == city )
        .filter((item)=> specialty === "" ? item : item.specialty === specialty );
        
        doctors = doctorsFilter ;
        setSearchParams({city , specialty});
    }
    else{
        doctors = data;
    }
     
    
    return {doctors  , isLoading};
}
