import { useState } from "react";
import { UserContext } from ".";
import { baseUrl } from "../clientApis/base";
import axios from "axios";

export default function UserContextProvider({ children }) {
    let data = JSON.parse(localStorage.getItem("user")) || { isAuth: false };
    const [userData, setUser] = useState(data);

    const updateUserData = (newUserData) => {
        // newUserData.isAuth = isUserLogin() === "user" ? true : false;
        console.log("newUserData:");
        console.log(newUserData);
        localStorage.setItem("user", JSON.stringify(newUserData));
        setUser(newUserData);
    };
    // if (isUserLogin() !== "user")updateUserData()

    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export async function isUserLogin() {
    try {
        let res = await axios.post(
            baseUrl + "/api/v1/auth/token/refresh",
            {},
            { withCredentials: true }
        );
        console.log(res.status);
        return "user";
    } catch (err) {
        console.log("|||||||||| userNotLogin");
        if (err?.response?.status === 401) {
            localStorage.removeItem("user");
            return "nouser";
        } else {
            console.log("Network Error");
            return false;
        }
    }
}
