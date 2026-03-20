import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authService } from '../services/auth.service';


interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (data:{ email: string; passwordRaw: string;}) => Promise<void>;
    register: (data:{ name: string; email: string; passwordRaw: string; role:string}) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children:ReactNode}) => {
    const [user, setUser] = useState<User | null> (() => {
        const stored = localStorage.getItem('auth_user');
        return stored ? JSON.parse(stored) : null;
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if(user) {
            localStorage.setItem('auth_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('auth_user');
            localStorage.removeItem('auth_token');
        }
    }, [user]);

    const login = async (data: {email: string, passwordRaw: string}) => {
        setIsLoading(true);
        try {
            const response = await authService.login(data);
            const { token, user: userData } = response.data.data;
            localStorage.setItem('auth_token', token);
            setUser(userData);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (data: {name: string, email: string, passwordRaw: string, role: string}) => {
        setIsLoading(true);
        try {
            await authService.register(data);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}