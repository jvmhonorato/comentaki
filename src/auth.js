import React , {useState} from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{isAuth:1}}>
            {children}
        </AuthContext.Provider>
    )
}


