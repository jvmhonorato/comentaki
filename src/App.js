
import React from 'react'
import './App.css';
import firebase from './firebase'

//connect firebase backend
const ref = firebase.database().ref('test')
ref.on('value',snapshoot =>{
  console.log(snapshoot.val())
})


function App() {
  return (
    <div >
     
    </div>
  );
}

export default App;
