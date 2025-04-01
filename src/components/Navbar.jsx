import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black p-5'>
        <div className='container mx-auto flex justify-between items-center'>
            <a href='/' className='text-white text-2xl font-bold'>User Cards</a>

            <ul className='flex space-x-4'>
                <li><a href='#' className='text-white'>Home</a></li>
                <li><a href='#' className='text-white'>About</a></li>
                <li><a href='#' className='text-white'>Services</a></li>
                <li><a href='#' className='text-white'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar