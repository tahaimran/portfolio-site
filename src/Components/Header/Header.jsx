import React from 'react'

function Header() {
  return (
    <div className='container flex flex-col md:flex-row  items-center h-[10vh] fixed top-0  p-4   bg-white     text-white '>
      <div className='logo flex-1'>
        <h4 className='text-4xl font-semibold'>Taha</h4>
      </div>
      <div className='list flex-1 '>
        <ol className='flex-1 flex  items-evenly  justify-evenly '>
          <li className='cursor-pointer hover:underline  text-xl '>About</li>
          <li className='cursor-pointer text-xl'>Testimonials</li>
          <li className='cursor-pointer text-xl'>Work</li>
          <li className='cursor-pointer text-xl'>Skills</li>
          <li className='cursor-pointer text-xl'>Blog</li>
          <li className='cursor-pointer  text-xl'>Contact</li>
        </ol>
      </div>
    </div>

    
  )
}

export default Header