import "./App.css";
import UserContextProvider from "./contexts/UserContextProvider";
import CustomRouterProvider from "./router/customrRouterProvider";

function App() {
    return (
        <UserContextProvider>
            <CustomRouterProvider />
        </UserContextProvider>
    );
}

export default App;
