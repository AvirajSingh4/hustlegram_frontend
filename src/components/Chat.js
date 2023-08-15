import React, { useState } from 'react'

import io from 'socket.io-client'
import Chat1 from './Chat1'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const socket=io.connect("http://localhost:5000")
const Chat = () => {
    
    const [username,setUsername]=useState("")
    const [room,setRoom]=useState("")
    const [showChat,setShowChat]=useState(false)

    const joinRoom=()=>{
        if(username!=="" && room!==""){
            socket.emit("join_room",room)
            setShowChat(true)
        }
    }

  return (
    <div>
        {!showChat ? (
     
      <div className='joinChatContainer'>
        
         <h3 className='chathead'>
         <Link className='backbutton1' to='/home'><ArrowBackIcon/></Link>
          <img className='chatlogo' src='https://i.pinimg.com/1200x/0d/ac/17/0dac171e7c44e5baea36c0de982f5025.jpg' alt=''/>hustler-chat</h3>
         <div className='roombody'>
      <input type="text" placeholder="Your Name..." onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" placeholder="Room ID..."  onChange={(e)=>setRoom(e.target.value)}/>
      <button onClick={joinRoom}>Join a Room</button>
      </div>
      </div>
      )
      : (
      <Chat1 socket={socket} user={username} room={room}/>
      )}
    </div>
   
  )
}

export default Chat