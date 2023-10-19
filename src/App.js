import "./App.css";
import UserContextProvider from "./contexts/UserContextProvider";
import CustomRouterProvider from "./router/customrRouterProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <CustomRouterProvider />
            </CartContextProvider>
        </UserContextProvider>
    );
}

export default App;
