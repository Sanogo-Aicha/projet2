import React, {  useState } from 'react'

const Etat =()=> {
    const [username,setUsername]=useState("FITIM")
    const handleuserName=()=>setUsername("ISSA")
    
    return (
      <>
        <span>{username}</span>
        <button onClick={handleuserName}>clickMe</button>
        </>
    )
  
}

export default Etat;