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
    
    const doctors2 = data?.filter((item)=>search === "" ? item : item.name.includes(search));
    const doctors1 = doctors2?.filter((item)=> city === "" ?  item : item.address.split("،")[0] == city);
    const doctors = doctors1?.filter((item)=> specialty === "" ? item : item.specialty === specialty);
    
    
    return {doctors  , isLoading};
}
