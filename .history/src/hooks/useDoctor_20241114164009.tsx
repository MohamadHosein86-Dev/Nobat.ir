import { useQuery } from "@tanstack/react-query";

function useDoctor() {
    
    const {data:doctor , isLoading:loadingDoctor} = useQuery({
        
    });

    return {doctor , loadingDoctor};
}