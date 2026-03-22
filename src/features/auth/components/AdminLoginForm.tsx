import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"
import { useState } from "react";
import { AlertCircle, Loader2, Lock, Mail, ShieldCheck } from "lucide-react";

const AdminLoginForm = () => {
    const { login, logout, isLoading } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [passwordRaw, setPasswordRaw] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setError('');

       if(!email || !passwordRaw) {
        setError('Please fill in all fields');
        return;
       }

       try {
        const user = await login({email, passwordRaw});
        if(user.role !== 'Admin') {
            logout();
            setError('You do not have permission to login as admin');
            return;
        }
        navigate('/admin');
       } catch (err:any) {
        setError(err.response?.data?.message || 'Invalid administrative credentials');
       }
    };
    
    return (
        <div className="w-full max-w-md">
            {/* Header Section */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 mb-4 shadow-xl">
                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Admin Portal</h2>
                <p className="text-slate-400 mt-2">Secure access to management console</p>
            </div>
            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                    <p className="text-sm text-red-200">{error}</p>
                </div>
            )}
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                            placeholder="admin@deeplearn.com"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type="password"
                            required
                            value={passwordRaw}
                            onChange={(e) => setPasswordRaw(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative overflow-hidden group bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                >
                    <div className="flex items-center justify-center gap-2">
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Authenticating...</span>
                            </>
                        ) : (
                            <span>Sign In to Terminal</span>
                        )}
                    </div>
                    {/* Subtle hover overlay effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
            </form>
            <div className="mt-8 text-center">
                <button 
                    onClick={() => navigate('/login')}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                    &larr; Return to main login
                </button>
            </div>
        </div>
    );
};
export default AdminLoginForm;