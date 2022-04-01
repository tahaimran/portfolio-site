import React from 'react'
import {Link} from 'react-scroll';
import {animateScroll as Scroll} from 'react-scroll'
function Header() {
  return (
    <div className='container flex flex-col md:flex-row  items-center h-[10vh] fixed top-0  p-4 text-white '>
      <div className='logo flex-1'>
        <h4 className='text-5xl font-semibold'>T</h4>
      </div>
      <div className='list flex-1 '>
        <ol className='flex-1 flex  items-evenly  justify-evenly '>
          <Link to='intro'><li className='cursor-pointer hover:underline  text-xl '>About</li></Link>
          <Link to='testimonial'><li className='cursor-pointer text-xl'>Testimonials</li></Link>
          <Link to=''><li className='cursor-pointer text-xl'>Work</li></Link>
          <Link to='skill'><li className='cursor-pointer text-xl'>Skills</li></Link>
          <Link to='contact'><li className='cursor-pointer  text-xl'>Contact</li></Link>
          {/* <li className='cursor-pointer text-xl'>Blog</li> */}
        </ol>
      </div>
    </div>

    
  )
}

export default Header