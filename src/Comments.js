import React from "react";
import { useDatabase } from "./database";
import Comment from "./Comment";


const Comments = () => {
  
    const endpoint = 'comments'
    
  const data = useDatabase(endpoint)
  if(!data){
    return <pre>Nenhum comentário até o momento!</pre>
  }
  const ids = Object.keys(data)
  if (ids.length === 0){
    return <p>Carregando...</p>
  }
  return ids.map(id => {
    return <Comment key={id} comment={data[id]}/>
  })
  
  }

  export default Comments