
import React,{useState, useEffect} from 'react'
import './App.css';
import firebase from './firebase'

//use param as a reference interface
const useDatabase = endpoint => {
  const [data, setData] = useState({})
  useEffect(()=> {
    //use endpoint as a reference interface to send..
    const ref = firebase.database().ref(endpoint)
    //turn ON database LINK
    ref.on('value',snapshoot =>{
      console.log(snapshoot.val())
      setData(snapshoot.val())
    })
    return () => {
      //turn OFF database link
      ref.off()
    }
  },[endpoint])
  return data
}


const useDatabasePush = endpoint => {
  const [status, setStatus] = useState('')

  const save = data => {
    const ref = firebase.database().ref(endpoint)
    ref.push(data, err => {
      if(err){
        setStatus('ERROR')
      }else{
        setStatus('SUCCESS')
      }
    })
  }
  return [status, save]
}
const Comment = ({comment}) => {

  return(
    <div>
      {comment.content} Por: {comment.user.name}
    </div>
  )
}


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



function App() {
const [visible, toogle] = useState(true)
const [, save] = useDatabasePush('comments')

  return (
    <div >
    
        <button onClick={() =>{ 
        
        save({ 
          content:'Olá aqui é meu comentário!',
          user: {
            id: '1',
            name:'Victor'
          }
        })
        }}>Save</button>
        
      <Comments />
      
     
    </div>
  );
}

export default App;
