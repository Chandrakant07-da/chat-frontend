import socketClient from 'socket.io-client'

import Chat from './chat/Chat'
import React from 'react'
const SERVER = "http://localhost:8080"

function App() {

  let socket = socketClient(SERVER)
  socket.on('connection', () =>{
    console.log('I am connected with backend')
  })
  return (
    <>
       <Chat/>
    </>
  );
}

export default App;