
import React from 'react'
import NewCommnet from './NewComment'
import Comments from './Comments'

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
//const [visible, toogle] = useState(true)


  return (
    <div >
    
     
      <NewCommnet/>
      <Comments />
      
     
    </div>
  );
}

export default App;
