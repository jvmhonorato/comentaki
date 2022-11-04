import React, { useState, useContext } from "react";

import { AuthContext } from "./auth";   


//Component to manege input and save data form
const FormDisplayName=({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }
    const save = () => {
        if(newDisplayName !== ''){
            user.updateProfile({displayName: newDisplayName})
        }
    }
    return (
        <>
           <input type='text' value={newDisplayName} onChange={onChange}/>
           <button onClick={save}>Save display name</button>
        </>
    )
}

const  UserInfo = () => {
const auth = useContext(AuthContext)




if (auth.user === null) {
    return null
 }   

 const { displayName } = auth.user
const alternativeDisplayName = auth.user.email
const dn = displayName || alternativeDisplayName

return (
    <>
       <p> Olá {displayName || alternativeDisplayName }!</p>
    <FormDisplayName displayName={dn} user={auth.user}/>
    <button onClick={auth.signout}>Sair</button>
    </>
   
)
}
export default UserInfo
