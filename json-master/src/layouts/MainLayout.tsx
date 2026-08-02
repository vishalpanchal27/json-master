import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Header />
            <Outlet />
        </main>
    );
};

export default MainLayout;