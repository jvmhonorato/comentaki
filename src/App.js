
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

//use params visible to use condition render 
const Comments = ({visible}) => {
  //if visible true: get all else get test/a
  const endpoint = visible ? 'test' : 'test/a'
  //send a condition render
const data = useDatabase(endpoint)
return (
  <pre>{JSON.stringify(data)}</pre>
)

} 
const A = () => {
  //get content from test/a
  const data = useDatabase('test/a')
  return(<pre>{JSON.stringify(data)}</pre>)
}


function App() {
const [visible, toogle] = useState(true)
const [status, save] = useDatabasePush('test')

  return (
    <div >
      <button onClick={() =>{ 
        toogle(!visible)
        
        }}>Toogle</button>
        <button onClick={() =>{ 
        
        save({ valor:1, b: 2 })
        }}>Save</button>
        Status: <pre>{status}</pre>
      <Comments visible={visible}/>
      <A />
     
    </div>
  );
}

export default App;
