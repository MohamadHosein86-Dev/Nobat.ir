import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";
import { pageSize } from "../Contants/PageSize";

export default function useDoctors() {
    const [searchParams]=useSearchParams();

    // filter
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";

  


    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search],
        queryFn:getchDoctors
    });
    
    // filter
    const doctorsFilter = data?.filter((res)=> city === "" ? res : res.address.split("،")[0] == city )
    .filter((item)=> specialty === "" ? item : item.specialty === specialty );
     

    // pagination
    const page = searchParams.get("page") || 1;
    const doctors = doctorsFilter?.slice((page - 1) *pageSize , page * pageSize);
    const totalPages = Math.ceil(( doctorsFilter?.length || 0 ) / pageSize);


    return {doctors , totalPages   , isLoading};
}
