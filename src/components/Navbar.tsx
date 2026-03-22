import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
    BookOpen, 
    Search, 
    PlusCircle, 
    Users, 
    CheckCircle, 
    LogOut, 
    User as UserIcon, 
    GraduationCap 
} from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const getNavLinks = () => {
        if (!user) return [];
        switch (user.role) {
            case "Student":
                return [
                    { label: "My Learning", path: "/dashboard", icon: GraduationCap },
                    { label: "Browse Courses", path: "/courses", icon: Search },
                ];
            case "Instructor":
                return [
                    { label: "My Courses", path: "/instructor", icon: BookOpen },
                    { label: "Create Course", path: "/instructor/create", icon: PlusCircle },
                ];
            case "Admin":
                return [
                    { label: "Users", path: "/admin/users", icon: Users },
                    { label: "Approvals", path: "/admin/approvals", icon: CheckCircle },
                ];
            default:
                return [];
        }
    };

    const navLinks = getNavLinks();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-500 transition-colors">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">DeepLearn</span>
                        </Link>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        isActive 
                                            ? "bg-blue-50 text-blue-700 shadow-sm" 
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* User Profile & Logout */}
                    <div className="flex items-center gap-4 border-l border-gray-200 pl-4 ml-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                                <UserIcon className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-semibold text-gray-900 leading-none">{user?.name}</p>
                                <p className="text-xs text-gray-500 mt-1 font-medium">{user?.role}</p>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all group"
                            title="Sign Out"
                        >
                            <LogOut className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Role indicator line for extra visual feedback */}
            <div className={`h-[2px] w-full ${
                user?.role === 'Admin' ? 'bg-purple-500' : 
                user?.role === 'Instructor' ? 'bg-amber-500' : 'bg-blue-500'
            }`} />
        </nav>
    );
};

export default Navbar;
