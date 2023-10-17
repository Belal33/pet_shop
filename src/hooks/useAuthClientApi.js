import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { clientApi } from "../clientApis/axiosBase";

function useAuthClientApi() {
    const refreshToken = useRefreshToken();
    useEffect(() => {
        const resIntercept = clientApi.interceptors.response.use(
            (res) => res,
            async (error) => {
                let prevReq = error.config;
                if (error.response.status === 401 && !prevReq.sent) {
                    prevReq.sent = true;
                    await refreshToken();
                }
                // else {
                console.log(error);
                return;
                // }
            }
        );
        return () => {
            clientApi.interceptors.response.eject(resIntercept);
        };
    }, [refreshToken]);
    return clientApi;
}
export default useAuthClientApi;
