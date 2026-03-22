import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <Navbar />
            <main className="pt-20 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page content is rendered here */}
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
