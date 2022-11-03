import React, {useState, useContext} from "react"
import { useDatabasePush } from "./database"
import firebase from "./firebase"
import { AuthContext } from './auth'


const NewComment = () => {
 
    const [,save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)
    // const [teste] = auth.user.email.split('@')
    // console.log(teste)
    if(auth.user === null){
      return null
    }
    console.log(auth)
     const  { displayName }  = auth.user
    const { email } = auth.user
    //const [ altenativeDisplayname ] = email.split('@')
     const createComment = () => {
    if(comment !== ''){
    save({ 
      content:comment,
      createdAt:firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: auth.user.uid,
        name: displayName || email
      }
    })
    setComment('')
   }
  }
  
  
  return(
    <>
    <textarea value={comment} onChange={evt => setComment(evt.target.value)}/>
       <button onClick={createComment}>Save</button>
        </>
  )
  }
  export default NewComment