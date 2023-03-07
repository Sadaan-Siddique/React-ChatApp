import React from 'react'

function Navbar() {
    const style = {
        nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
        heading: `text-white text-3xl`
    }
    return (
        <div className={style.nav}>
            <h1 className={style.heading}>Chat App</h1>
            {user ? <LogOut /> : <SignIn />}

        </div>)
}

export default Navbar