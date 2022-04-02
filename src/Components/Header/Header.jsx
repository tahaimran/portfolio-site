import React from 'react'
import {Link} from 'react-scroll';
import {animateScroll as Scroll} from 'react-scroll'
import Logo from '../../Images/logo.png'
function Header() {
  return (
    <div className='container flex flex-col md:flex-row  items-center h-[10vh]  fixed top-0   p-4 text-white '>
      <div className='logo flex-1'>
       <img className='w-16 invert   font-semibold cursor-pointer'  onClick={()=> Scroll.scrollToTop()}   src={Logo}/>
      </div>
      <div className='list flex-1 '>
        <ol className='flex-1 flex  items-evenly  justify-evenly  '>
          <Link to='about' smooth={true} duration={1000}><li className='cursor-pointer m-2  hover:underline   text-xl '>About</li></Link>
          <Link to='project' smooth={true} duration={1000}><li className='cursor-pointer  m-2  hover:underline text-xl'>Projects</li></Link>
          <Link to='testimonial' smooth={true} duration={1000}><li className='cursor-pointer  hover:underline m-2  text-xl'>Testimonials</li></Link>
          <Link to='skill' smooth={true} duration={1000}><li className='cursor-pointer  m-2  hover:underline text-xl'>Skills</li></Link>
          <Link to='contact' smooth={true} duration={1000}><li className='cursor-pointer  m-2  hover:underline text-xl'>Contact</li></Link>
          {/* <li className='cursor-pointer text-xl'>Blog</li> */}
        </ol>
      </div>
    </div>

    
  )
}

export default Header