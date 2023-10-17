import { useState } from "react";
import { UserContext } from ".";

export default function UserContextProvider({ children }) {
    let data = JSON.parse(localStorage.getItem("user")) || { isAuth: false };

    const [userData, setUser] = useState(data);
    const updateUserData = (newUserData) => {
        // newUserData.isAuth = true;
        localStorage.setItem("user", JSON.stringify(newUserData));
        setUser(newUserData);
    };
    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
}
