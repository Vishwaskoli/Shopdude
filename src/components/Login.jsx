import React, { useState } from 'react'

export default function Login({isLogin,onLogout,onLogin}) {

  return (
    <div style={{cursor:"pointer"}}>
      {isLogin? <div className="nav-link fs-5" onClick={onLogout}>logout</div>:<div className="nav-link fs-5" onClick={onLogin} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</div>}
    </div>
  )
}
