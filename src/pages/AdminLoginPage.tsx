import AdminLoginForm from "../features/auth/components/AdminLoginForm";

const AdminLoginPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Grain/Texture Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-900/20 rounded-full blur-[120px]"></div>

            <div className="relative z-10 w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
                <AdminLoginForm />
            </div>
        </div>
    );
};

export default AdminLoginPage;
