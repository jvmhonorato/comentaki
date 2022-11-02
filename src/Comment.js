import React, { useContext } from "react";
import Time from "./Time";
import { AuthContext } from "./auth";


const Comment = ({comment}) => {
    const auth= useContext(AuthContext)

    return(
      <div>
        {JSON.stringify(auth)}
        {comment.content} Por: {comment.user.name} em: <Time timestamp={comment.createdAt}/> 
      </div>
    )
  }

  export default Comment