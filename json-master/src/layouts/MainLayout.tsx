import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Outlet />
        </main>
    );
};

export default MainLayout;