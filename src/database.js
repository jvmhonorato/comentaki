import firebase from './firebase'
import { useState, useEffect } from 'react'

export const useDatabasePush = endpoint => {
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

//use param as a reference interface
export const useDatabase = endpoint => {
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
  