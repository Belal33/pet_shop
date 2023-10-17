import AboutSec from "../components/aboutsec";
import FoodSec from "../components/foodsec";
import Footer from "../components/footer";
import { LandingSec } from "../components/langding";
import { NavBar } from "../components/navbar";
import PlansSec from "../components/planssec";

export function HomePage() {
    return (
        <>
            <NavBar />
            <main>
                <LandingSec />
                <AboutSec />
                <FoodSec />
                <PlansSec />
            </main>
            <Footer />
        </>
    );
}
