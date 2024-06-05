import React, { useState } from 'react'
import { createContext } from 'react'
export const Datacontext = createContext(null);

function Dataprovider({children}) {
    const[account,setaccount] = useState('')
  return (
    <div>
    <Datacontext.Provider value={{account,setaccount}}>
    {children}

    </Datacontext.Provider>

      
    </div>
  )
}

export default Dataprovider
