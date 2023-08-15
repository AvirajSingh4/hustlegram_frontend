import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
//import axios from 'axios'
const Signup = () => {
  const [user,setUser]=useState({
    email:"",name:"",password:"",cpassword:""
  })
  const navigate=useNavigate()

  const handleInput=(e)=>{
    console.log(e.target.value)
    setUser({...user,[e.target.name]:e.target.value})
  }

  const Register=async(e)=>{
    e.preventDefault()
    const {email,name,password,cpassword}=user
    const res=await fetch('/register',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email,name,password,cpassword
      })
    })
    const data=await res.json()
    if(res.status===422 || !data ){
      window.alert("Invalid Reg")
      console.log("Invalid Reg")
    }else{
      window.alert("Success Reg")
      console.log("Success Reg")

      navigate('/')
    }
  }
    /*const res=await axios.post('http://localhost:3000/register',{email,name,password,cpassword})
    try {
      if(res.status===422){
        alert("Unsuccessful")
      }
      else{
        alert('Success Signup')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }*/




  return (
    <div>
      <div className='container3'>
        <div className='container4'>
        
            <form method='POST'>
            <h1>hustlegram</h1>
            <font><i>Sign up to see  crazy stuff from your friends.</i></font><br/><br/>
                <input type='email' name='email' id='email' placeholder='Enter your email' value={user.email} onChange={handleInput}/>
                <input type='text' name='name' id='name' placeholder='Enter your name' value={user.name} onChange={handleInput}/>
                <input type='password' name='password' id='password' placeholder='Enter your password' value={user.password} onChange={handleInput}/>
                <input type='password' name='cpassword' id='cpassword' placeholder='Confirm password' value={user.cpassword} onChange={handleInput}/>
                <button className='btn' type='submit' onClick={Register}>Sign up</button>
                <br/><br/><hr/><br/>
                <h4>Already have an account ?</h4><NavLink to='/'>Sign in</NavLink>
                <br/><br/>
                <h4>Follow us on</h4>
                <div className='socialmedia'>
                <a href='https://www.facebook.com'><img className='socialmedia1' src='https://icon-library.com/images/small-facebook-icon-for-website/small-facebook-icon-for-website-13.jpg' alt='logo'/></a>
                <a href='https://about.instagram.com/blog/announcements/threads-instagram-text-feature'><img className='socialmedia2' src='https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638252100960000000' alt='logo'/></a>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup