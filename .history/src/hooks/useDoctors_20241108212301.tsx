import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";

export default function useDoctors() {
    const [searchParams ]=useSearchParams();
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("specialty") || "";
    
    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty],
        queryFn:getchDoctors
    });
    
    const doctors1 = data?.filter((item)=> city === "" ?  item : item.address.split("،")[0] == city);
    const doctors2 = doctors1?.filter((item)=> specialty === "" ? item : item.specialty === specialty);
    const doctors = doctors2?.filter((item)=> {});
    
    return {doctors  , isLoading};
}
