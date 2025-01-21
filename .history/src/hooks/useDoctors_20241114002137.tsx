import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";

export default function useDoctors() {
    const [searchParams]=useSearchParams();
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";
    const page = searchParams.get("page") || 1;
  

    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search],
        queryFn:getchDoctors
    });
    
    const doctors1 = data?.filter((res)=> city === "" ? res : res.address.split("،")[0] == city ).filter((item)=> specialty === "" ? item : item.specialty === specialty );
    const doctors = doctors1?.filter((item)=> specialty === "" ? item : item.specialty === specialty);
    
    
    return {doctors   , isLoading};
}
