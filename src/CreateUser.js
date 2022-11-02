import React, {useContext} from "react";
import { AuthContext } from "./auth";

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <>
        {JSON.stringify(auth.createUser)}
            <button onClick={()=> {
auth.createUser.createUser('victor@gmail.com', 'abc123')
            }}>CREATE</button>
        </>
    )
}
export default CreateUser