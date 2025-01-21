import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";
import { pageSize } from "../Contants/PageSize";

export default function useDoctors() {
    const [searchParams ]=useSearchParams();

    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";
    const page = Number(searchParams.get("page")) || 1;


    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search , page],
        queryFn:getchDoctors

    });


    // filter
    const doctorsFilter = data?.filter((res)=> city === "" ? res : res.address.split("،")[0].includes(city) )
    .filter((item)=> specialty === "" ? item : item.specialty.includes(specialty) );
     

    // pagination
    const doctors = doctorsFilter?.slice((page - 1) *pageSize , page * pageSize);
    const totalPages = Math.ceil(( doctorsFilter?.length || 0 ) / pageSize);

    //search
    const searchDoctors = doctorsFilter?.filter((item)=> search == "" ? "" : item.name.includes(search) || item.specialty.includes(search) )

    return {doctors , totalPages   , isLoading ,searchDoctors};
}
