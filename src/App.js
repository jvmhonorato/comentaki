
import React, { useState } from 'react'
import NewCommnet from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import { AuthProvider } from './auth'

import firebase from './firebase'


// firebase
// .auth()
// .createUserWithEmailAndPassword( 'victorpachara@gmail.com', 'abc123')
// .then( user => {
//   user.displayName='Victor Honorato'
//   firebase.auth().updateCurrentUser({user})
  
  
// })





function App() {



  return (
    
    <AuthProvider>
      <div >
      <NewCommnet/>
      <Comments />
      <CreateUser/>
     
    </div>
    </AuthProvider>
     
  
  );
}

export default App;
