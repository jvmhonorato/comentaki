
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

const Time = ({timestamp}) => {
  const date= new Date(timestamp)
  const hours = date.getHours()
  const minutes = '0'+date.getMinutes()
  const seconds = '0'+date.getSeconds()
  const day = (date.getDay()-1)
  const month = (date.getMonth()+1)
  const year = (date.getFullYear())
  console.log(date)
  return`${day}/${month}/${year} as ${hours}:${minutes.substring(1,3)}:${seconds.substring(1,3)}`
}
const Comment = ({comment}) => {

  return(
    <div>
      {comment.content} Por: {comment.user.name} em: <Time timestamp={comment.createdAt}/> 
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

function App() {
//const [visible, toogle] = useState(true)


  return (
    <div >
    
     
      <NewCommnet/>
      <Comments />
      
     
    </div>
  );
}

export default App;
