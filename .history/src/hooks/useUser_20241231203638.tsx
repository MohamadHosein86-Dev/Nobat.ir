import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../servises/AthenacationApi";

export default function useUser() {
        const {data:user ,isLoading}=useQuery({
            queryKey:["user"],
            queryFn:getCurrentUser
        });
        console.log(user + " kos nanat");
        
        return {  isLoading ,user , authenticatd : !!user };
}
