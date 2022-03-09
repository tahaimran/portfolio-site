import React from 'react'

function Header() {
  return (
    <div class="h-[10vh]  p-4 ">
    <nav className='container flex  items-center fixed  text-white '>
      <div className='logo flex-1'>
        <h4 className='text-4xl font-semibold'>Taha</h4>
      </div>
      <div className='list flex-1 '>
        <div className='flex items-evenly  justify-evenly '>
          <ol className='cursor-pointer text-xl '>About</ol>
          <ol className='cursor-pointer text-xl'>Testimonials</ol>
          <ol className='cursor-pointer text-xl'>Work</ol>
          <ol className='cursor-pointer text-xl'>Skills</ol>
          <ol className='cursor-pointer text-xl'>Blog</ol>
          <ol className='cursor-pointer text-xl'>Contact</ol>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header