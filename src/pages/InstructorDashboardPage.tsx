import { useAuth } from "../context/AuthContext";
import { PlusCircle, Users, BarChart3, LayoutGrid } from "lucide-react";

const InstructorDashboardPage = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Instructor Console</h1>
                    <p className="text-gray-500 mt-1">Manage your courses and track student progress.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                    <PlusCircle className="w-5 h-5" />
                    Create New Course
                </button>
            </div>

            {/* Teaching Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+0%</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Total Students</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">0</p>
                </div>
                {/* Repeat for "Course Ratings" and "Total Revenue" */}
            </div>

            {/* Courses Management */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-2">
                    <LayoutGrid className="w-5 h-5 text-gray-400" />
                    <h2 className="text-lg font-bold text-gray-900">My Courses</h2>
                </div>
                <div className="p-12 text-center">
                    <p className="text-gray-400 font-medium">You haven't created any courses yet.</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboardPage;
