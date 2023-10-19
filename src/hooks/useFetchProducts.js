import axios from "axios";
import { useState } from "react";

export default function useFetchProducts() {
    let [response, setResponse] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);

    const fetchProducts = async (url) => {
        try {
            setLoading(true);
            let res = await axios.get(url, { withCredentials: true });
            console.log(res.data);
            setResponse(res.data);
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    return { fetchProducts, response, loading, error };
}
