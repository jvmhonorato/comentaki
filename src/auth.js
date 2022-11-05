import React , {useState, useEffect} from 'react'
import firebase from './firebase'

export const AuthContext = React.createContext()

const useGetUser = () => {
    const [user, setUser] = useState({})
    useEffect(()=> {
     firebase.auth().onAuthStateChanged(currentUser => {
     if(currentUser){
        setUser(currentUser)
     }else{
        setUser(null)
    }
  })
 },[])
 return user
}

//hook state with status params 
const useCreateUser = () => {
    const [state, setState] = useState({
        error:'',
        success:''
    })

    //Function create from firebase
    const createUser = (email, passwd) => {
     firebase
    .auth()
    .createUserWithEmailAndPassword(email,passwd)
    .then( user => {
        if(user){
            setState({
                ...state,
                success: 'OK'
                })
             }
   
         }).catch(err => {
            setState({
                ...state,
                error: err.message
            })
        })
     }
 return [state, createUser]
}

//
const useSingInUser = () => {
    const [state, setState] = useState({
        error:'',
        success:''
    })

    //Function sign from firebase
    const signInUser = (email, passwd) => {
     firebase
    .auth()
    .signInWithEmailAndPassword(email,passwd)
    .catch(err => {
            setState({
                ...state,
                error: err.message
            })
        })
     }
 return [state, signInUser]
}

//method to getout session
const signout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => {
        console.log('signout')
    }) 
}


export const AuthProvider = ({children}) => {
    const user = useGetUser()
    // come from func above:state= createUserstate, createUser=createUser
    const [ createUserState,createUser] = useCreateUser()

    //come from func above:state= createUserstate, createUser=createUser
    const [signInUserState, signInUser] = useSingInUser() 
   
    return (
        <AuthContext.Provider value={{
            user,
            createUser:{
            createUserState, createUser
         },
         signInUser:{
            signInUserState, signInUser
         },
         signout
            }}>
            {children}
        </AuthContext.Provider>
    )
}


