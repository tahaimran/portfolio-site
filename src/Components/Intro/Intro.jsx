import React from 'react'
import {Link} from 'react-scroll';
import Button from '../Button/Button'
function Intro() {
  return (
    <div id='intro' className='container-xl  flex  flex-col  ml-10 items-start text-white  md:ml-36 my-48'>
      <h3 className='text-3xl sm:text-4xl mb-5'>Hi, my name is</h3>
      <h1 className='text-7xl md:text-[180px]  mb-5'>Taha Imran</h1>
      <h3 className='text-4xl sm:text-5xl mb-5'>I convert imagination to code!</h3>
      <p className='text-lg sm:w-3/4'>I’m a FullStack web developer. I am here to be part of the world's biggest and most creative community. I love to create creative UIs and put my abilities upfront for my clients and communities. Also, the Stuff that I built in the hackathon led to the Winner of the Hackathon.</p>
      <div className='mt-6' >
        <Link to='contact' smooth={true} duration={1000} ><Button  Text="Contact" /></Link>
      </div>
    </div>
  )
}

export default Intro