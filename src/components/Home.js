import React from 'react'
import  "./Home.css";
import Sidebar from './Sidebar';
import Feed from './Feed';

function Home(){

    return(<>
    <div className='homepage'>
        <div className='homepage__bar'>
            <Sidebar />
        </div>
        <div className='homepage__feed'>
            <Feed />
        </div>
    </div>
    </>)
}
 
export default Home