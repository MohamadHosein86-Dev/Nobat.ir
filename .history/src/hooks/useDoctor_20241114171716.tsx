import { useQuery } from "@tanstack/react-query";
import { getchDoctor } from "../servises/getDoctors";
import { useParams } from "react-router-dom";



export function useDoctor() {
    const {id}=useParams();

    const {data:doctor , isLoading:loadingDoctor} = useQuery({
        queryKey :["doctor",id],
        queryFn:()=>getchDoctor(id)
    });

    return {doctor , loadingDoctor};
}