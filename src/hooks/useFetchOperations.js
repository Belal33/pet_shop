import { useState } from "react";
import useAuthClientApi from "./useAuthClientApi";

export default function useFetchOperations() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const authClientApi = useAuthClientApi();

    const fetchOperations = async (url) => {
        try {
            setLoading(true);
            let res = await authClientApi.get(url);
            // console.log(res.data);
            setResponse(res.data);
        } catch (err) {
            // console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    return { fetchOperations, response, loading, error };
}
