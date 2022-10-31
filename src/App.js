
import React,{useState, useEffect} from 'react'
import './App.css';
import firebase from './firebase'

const Comments = () => {
  const [data, setData] = useState({})
  useEffect(()=> {
    const ref = firebase.database().ref('test')
    //turn ON database LINK
    ref.on('value',snapshoot =>{
      console.log(snapshoot.val())
      setData(snapshoot.val())
    })
    return () => {
      //turn OFF database link
      ref.off()
    }
  },[])
return (
  <pre>{JSON.stringify(data)}</pre>
)

} 


function App() {
const [visible, toogle] = useState(true)

  return (
    <div >
      <button onClick={() => toogle(!visible)}>Toogle</button>
     { visible && <Comments/>}
     
    </div>
  );
}

export default App;
