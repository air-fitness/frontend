import React from 'react';
import { createBrowserHistory } from "history";


const LogOutButton = () => {
  const history = createBrowserHistory();

  return(
      <button className='logout-button' 
        onClick={() =>{
        // localStorage.clear();
          localStorage.removeItem("jwt");
          localStorage.removeItem("persist:root");
          alert('logout success!');
          history.push('/');
          window.location.reload();
      }}>Log Out</button>
  )
}
export default LogOutButton;