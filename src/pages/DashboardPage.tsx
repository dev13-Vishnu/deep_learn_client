import { useAuth } from "../context/AuthContext";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

const DashboardPage = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Welcome Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}! 👋</h1>
                <p className="text-gray-500 mt-1">Ready to continue your learning journey?</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Enrolled Courses</p>
                        <p className="text-2xl font-bold text-gray-900">0</p>
                    </div>
                </div>
                {/* Add more stats cards here if needed */}
            </div>

            {/* Enrolled Courses Section */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">My Learning</h2>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 transition-colors">
                        Browse All Courses <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Empty State (Since we haven't implemented course enrollment yet) */}
                <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">No courses yet</h3>
                    <p className="text-gray-500 mt-1 max-w-xs mx-auto">
                        Explore our course catalog and start learning something new today.
                    </p>
                    <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200">
                        Explore Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;