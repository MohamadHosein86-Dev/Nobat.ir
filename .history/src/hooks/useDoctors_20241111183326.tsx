import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function useDoctors() {
    const [searchParams ,setSearchParams]=useSearchParams();
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";
    const [finalDoctors , setFainalDoctors]=useState([]) as DoctorType[];

    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search],
        queryFn:getchDoctors
    });


    if(search){
        const searchDoctors = data?.filter((item)=> search === "" ? item : item.name.includes(search));
        setFainalDoctors(searchDoctors);
        setSearchParams({search});
    }
    else if(city || specialty){
        const doctorsFilter =  data?.filter((res)=> city === "" ? res : res.address.split("،")[0] == city )
        .filter((item)=> specialty === "" ? item : item.specialty === specialty );
        setFainalDoctors(doctorsFilter);
        setSearchParams({city , specialty});
    }
    else{
        setFainalDoctors(data);
    }
     
    
    
    return {doctors :finalDoctors , isLoading};
}
