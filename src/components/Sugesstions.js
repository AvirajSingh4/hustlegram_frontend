import React, { useState } from 'react';
import  "./Home.css";
import Cam from './Cam';


    const Sugesstions = () => {
        const [isComponentVisible, setIsComponentVisible] = useState(false);
      
        const handleButtonClick = () => {
          setIsComponentVisible(true);
        };

    return(<>

        <div className='suggestion'> 
            <b>Suggestions</b><br/>
            <button className='btn' onClick={handleButtonClick}>Show Component</button>
            {isComponentVisible && <Cam />}
           
        </div>
    </>)
    }
 
export default Sugesstions
