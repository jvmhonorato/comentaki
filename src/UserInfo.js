import React, { useContext } from "react";

import { AuthContext } from "./auth";   

const  UserInfo = () => {
const auth = useContext(AuthContext)
if (auth.user === null) {
    return null
 }   
 const { displayName } = auth.user
const [alternativeDisplayName] = auth.user.email.split('@')

return (
    <p> Olá {displayName || alternativeDisplayName }</p>
)
}
export default UserInfo
