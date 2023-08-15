import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sign.css'

const Home = () => {
  const [emplist, setEmpList] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/viewalluser')
          .then(response => {
              setEmpList(response.data);
          })
          .catch((error) => {
              console.log(error);
          })
  }, [])

  function viewEmpList() {
      return emplist.map((currentrow, index) => {
          return (
              <tr key={index}>
                 
                  <td>{currentrow.name}</td>
                  
              </tr>
          );
      });
  }
  return (
    <div className="cont" >
            <h3 className="users">People you may know</h3><hr/>
            <table className="usertable">
                <tbody className='viewuser'>
                    {viewEmpList()}
                </tbody>
            </table>
            
        </div>
  )
}

export default Home
