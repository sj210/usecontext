import React, { useContext } from 'react'
import AuthContext from './AuthContext'

function ComponentF() {

    const context = useContext(AuthContext);


  return (
    <div>User is {context.isLoggedIn} in ComponentF</div>
  )
}

export default ComponentF