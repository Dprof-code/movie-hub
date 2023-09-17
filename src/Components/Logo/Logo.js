import React from 'react'
import logo from "../../Assets/Logo/logo.svg"

const Logo = () => {
    return (
        <div className='Logo d-inline-block'>
            <img src={logo} width="30" height="24" class="d-inline-block align-text-top" alt='logo icon' />
        </div>
    )
}

export default Logo