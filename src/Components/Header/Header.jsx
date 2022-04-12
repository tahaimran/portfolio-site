import React from 'react'
import {Link} from 'react-scroll';
import {animateScroll as Scroll} from 'react-scroll'
import Logo from '../../Images/logo.png'
function Header() {
  return (
    <div className='w-[100%] flex flex-col sm:flex-row sm:justify-between  items-center h-[auto]  fixed top-0 bg-[#A30C5A]   p-4  text-white shadow-2xl'>
      <div className='logo '>
       <img className='w-16 invert   font-semibold cursor-pointer'  onClick={()=> Scroll.scrollToTop()}   src={Logo}/>
      </div>
      <div className='list '>
        <ol className='flex flex-row   text-semibold'>
          <Link to='about' smooth={true} duration={1000}><li className='cursor-pointer m-2 sm:m-5  hover:underline   text-xl '>About</li></Link>
          <Link to='project' smooth={true} duration={1000}><li className='cursor-pointer  m-2 sm:m-5  hover:underline text-xl'>Projects</li></Link>
          <Link to='testimonial' smooth={true} duration={1000}><li className='cursor-pointer  hover:underline m-2 sm:m-5  text-xl'>Testimonials</li></Link>
          <Link to='skill' smooth={true} duration={1000}><li className='cursor-pointer  m-2 sm:m-5  hover:underline text-xl'>Skills</li></Link>
          <Link to='contact' smooth={true} duration={1000}><li className='cursor-pointer  m-2 sm:m-5  hover:underline text-xl'>Contact</li></Link>
          {/* <li className='cursor-pointer text-xl'>Blog</li> */}
        </ol>
      </div>
    </div>

    
  )
}

export default Header