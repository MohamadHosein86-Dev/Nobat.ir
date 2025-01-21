import { useQuery } from "@tanstack/react-query";
import { getchDoctors } from "../servises/getDoctors";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useDoctors() {
    const [searchParams ,setSearchParams]=useSearchParams();
    const city = searchParams.get("city") || "";
    const specialty = searchParams.get("specialty") || "";
    const search = searchParams.get("search") || "";

    const {data , isLoading} = useQuery({
        queryKey:["doctors" , city , specialty , search],
        queryFn:getchDoctors
    });


    const [finaldoctors , setfinaldoctors] =useState([]);
    
   useEffect(()=>{
    if(data){
        if(search){
            const searchData = data?.filter((item)=> search === "" ? item : item.name.includes(search))
            setfinaldoctors(searchData)
            setSearchParams({search});
        }
        else if(city || specialty){
            const doctorsFilter =  data?.filter((res)=> city === "" ? res : res.address.split("،")[0] == city )
            .filter((item)=> specialty === "" ? item : item.specialty === specialty );
            
            setfinaldoctors(doctorsFilter)
           if(city){
            setSearchParams({city });
           }
           if(specialty)
            setSearchParams({specialty});
        }
        else{
            setfinaldoctors(data)
        }
    }
   },
   [data  , search , city ,specialty ,setSearchParams])
     
     
    
    return {doctors:finaldoctors  , isLoading};
}
