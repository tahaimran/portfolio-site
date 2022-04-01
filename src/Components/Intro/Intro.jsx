import React from 'react'
import Button from '../Button/Button'
function Intro() {
  return (
    <div id='intro'  className='container-lg  flex flex-1 flex-col items-start text-white  sm:ml-36 my-44'>
        <h3 className='text-3xl sm:text-4xl mb-5'>Hi, my name is</h3>
        <h1 className='text-6xl sm:text-[180px]  mb-5'>Taha Imran</h1>
        <h3 className='text-4xl sm:text-5xl mb-5'>I convert imagination to code!</h3>
        <p className='text-lg w-3/4'>I’m a FullStack web developer. Focused on creating amazing UIs to solve business problems around the globe. I am participating in Hackathons and solving problems to build something cool and useful for the world. 🤓</p>
    <div className='mt-6' >
      <Button Text="Contact"  >Contact Us</Button>
    </div>
    </div>
  )
}

export default Intro