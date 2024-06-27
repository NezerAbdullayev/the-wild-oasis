import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../services/apiSettings"

function useSetting() {
    const {isLoading,error,data:settings}=useQuery({
        queryKey:["settings"],
        queryFn:getSettings,
    })
    return{isLoading,error,settings}
}

export default useSetting



