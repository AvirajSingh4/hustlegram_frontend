import React from 'react'
import  "./Home.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Sidebar(){

    return(<>

        <div className=" Bar">
        <h1><b>hustlegram</b></h1><br/>
            <ul>
                <li> <HomeIcon/> <Link to='/home'><b>Home</b></Link></li>
                <li><SearchIcon/> <Link to='/home'><b>Search</b></Link></li>
                <li><MessageIcon/> <Link to='/chat'><b>Message</b></Link></li>
                <li><LogoutIcon/> <Link to='/'><b>Logout</b></Link></li>
            </ul>
        </div>
    </>)
}
 
export default Sidebar