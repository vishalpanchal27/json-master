import { NavLink } from "react-router-dom";

const Header = () => {
    const navItems = [
        {
            title: "JSON Viewer",
            path: "/",
        },
        {
            title: "Formatter",
            path: "/formatter",
        },
        {
            title: "Validator",
            path: "/validator",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-2xl font-bold text-cyan-400"
                >
                    JsonMaster
                </NavLink>

                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `transition-colors ${isActive
                                    ? "text-cyan-400"
                                    : "text-slate-300 hover:text-white"
                                }`
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </nav>

            </div>
        </header>
    );
};

export default Header;