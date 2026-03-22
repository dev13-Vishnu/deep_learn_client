import { ShieldCheck, UserCog, UserCheck, Settings } from "lucide-react";

const AdminDashboardPage = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900">System Administration</h1>
                <p className="text-slate-500 mt-1">Platform-wide overview and management tools.</p>
            </div>

            {/* Admin Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Pending Approvals Card */}
                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl hover:scale-[1.02] transition-transform cursor-pointer group">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                            <UserCheck className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="text-2xl font-black text-blue-400">0</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-blue-300 transition-colors">Instructor Requests</h3>
                    <p className="text-slate-400 text-sm mt-1">Verify new teacher applications</p>
                </div>

                {/* User Management Card */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                        <UserCog className="w-6 h-6 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">User Management</h3>
                    <p className="text-slate-500 text-sm mt-1">Manage all accounts and roles</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
