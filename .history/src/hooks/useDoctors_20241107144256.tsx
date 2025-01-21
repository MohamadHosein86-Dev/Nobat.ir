import { useQuery } from "@tanstack/react-query";

export default function useDoctors() {
    const {data:doctors , isLoading} = useQuery({
        queryKey:["doctors"],
        queryFn:()=>{}
    })
}
