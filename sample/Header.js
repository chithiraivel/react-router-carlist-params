import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>

    <div className='parent1'>
        <div className='pattern'>
            <p>PATTERN COIN</p>
        </div>

        <div className='coin'>
            <span>Home</span>
            <span>About</span>
            <span>FAQ</span>
            <span>Listed In</span>
            <span>Contacts</span>
            <button>Login</button>
            <button className='one2'>Register</button>
        </div>
    </div>
    </div>
  )
}

export default Header