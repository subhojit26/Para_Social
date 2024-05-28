import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    const login = () => {
        setCurrentUser({ name: 'John Doe', id: 1, profilePic: 'https://images.pexels.com/photos/2768677/pexels-photo-2768677.jpeg?auto=compress&cs=tinysrgb&w=600' });
    };

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};
