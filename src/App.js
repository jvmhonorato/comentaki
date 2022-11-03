
import React from 'react'
import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import { AuthProvider } from './auth'
import UserInfo from './UserInfo'



function App() {



  return (
    
    <AuthProvider>
      <div >
      <NewComment/>
      <Comments />
      <CreateUser/>
     <UserInfo/>
    </div>
    </AuthProvider>
     
  
  );
}

export default App;
