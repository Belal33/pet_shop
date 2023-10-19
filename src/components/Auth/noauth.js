import { useContext } from "react";
import { UserContext } from "../../contexts";
import { Navigate } from "react-router-dom";

export default function NoAuth({ children: Children }) {
    let { userData } = useContext(UserContext);

    return userData.isAuth ? <Navigate to={"/"} /> : <Children />;
}
