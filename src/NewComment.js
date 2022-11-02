import React, {useState} from "react"
import { useDatabasePush } from "./database"
import firebase from "./firebase"


const NewCommnet = props => {
    const [,save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
  const createComment = () => {
    if(comment !== ''){
    save({ 
      content:comment,
      createdAt:firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: '1',
        name:'Victor'
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
  export default NewCommnet