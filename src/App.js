
import React, { useState } from 'react'
import NewCommnet from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'

import firebase from './firebase'


// firebase
// .auth()
// .createUserWithEmailAndPassword( 'victorpachara@gmail.com', 'abc123')
// .then( user => {
//   user.displayName='Victor Honorato'
//   firebase.auth().updateCurrentUser({user})
  
  
// })

// firebase.auth().onAuthStateChanged(user => {
//   if(user){}
//   console.log(user.displayName)
//   user.updateProfile({displayName: 'Joao '})
// })



function App() {



  return (
    
    <AuthProvider>
      <div >
      <NewCommnet/>
      <Comments />
     
    </div>
    </AuthProvider>
     
  
  );
}

export default App;
