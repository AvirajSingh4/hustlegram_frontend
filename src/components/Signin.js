import React,{useState} from 'react'
import './Sign.css'
import { NavLink, useNavigate } from 'react-router-dom'
//import axios from 'axios'

const Signin = () => {
    const [user,setUser]=useState({
      email:"",password:""
    })
    const navigate=useNavigate()

    const handleInput=(e)=>{
        console.log(e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
    }
    const Login=async(e)=>{
        e.preventDefault()
        const {email,password}=user
        const res=await fetch('/login',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,password
          })
          })
          const data=res.json();
          if(res.status === 400 || !data){
            window.alert("Invalid credentionals")
          }else{
            window.alert("Success credentionals")
            navigate('/home')
          }
        }          
        /*const res=await axios.post('http://localhost:3000/login',{email,password})
        try {
          if(res.status===422){
            alert("Invalid Credentials")
            }else{
              alert("Success Login")
              navigate('/')
            }
        } catch (error) {
          console.log(error)
        }
    }*/


  return (
    <>
      <div className='image1'>
      <img src="https://cdn.dribbble.com/users/8645133/screenshots/16155817/scroll-tab-resize.gif" alt='logo'/>
      </div>
      <div className='container1'>
        <div className='container2'>
        
            <form method='POST'>
            <h1>hustlegram</h1>
                <input type='email' name='email' id='email' placeholder='Enter your email' value={user.email}
                onChange={handleInput}/>
                <input type='password' name='password' id='password' placeholder='Enter your password' value={user.password}
                onChange={handleInput}/>
                <button className='btn' type='submit' onClick={Login}>Log in</button>
                <br/><br/><hr/><br/>
                <h4>Don't have an account ?</h4><NavLink to='/signup'>Sign up</NavLink>
                <br/><br/>
                <h4>Follow us on</h4>
                <div className='socialmedia'>
                <a href='https://www.facebook.com'><img className='socialmedia1' src='https://icon-library.com/images/small-facebook-icon-for-website/small-facebook-icon-for-website-13.jpg' alt='logo'/></a>
                <a href='https://about.instagram.com/blog/announcements/threads-instagram-text-feature'><img className='socialmedia2' src='https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638252100960000000' alt='logo'/></a>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Signin
