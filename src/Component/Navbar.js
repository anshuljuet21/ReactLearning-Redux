import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const count=useSelector((state)=>state.CartReducer.cartvalue.length)
  return (
    <div>
      <div className='navbar navbar-dark bg-dark text-white justify-content-center'>
        <div className='d-inline p-2 navbar-nav'>
            <span>Cart item:{0}</span>|
            <span>Cart total:{0}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
