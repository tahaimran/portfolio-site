import React from 'react'
import Show from '../../Images/Contact/show.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div id='contact' className='container flex flex-col '>
      <div className='text-center'>
        <h2 className='text-6xl font-semibold  text-white'>Contact</h2>
      </div>
      <div className='flex justify-evenly flex-wrap  items-center  text-white font-bold mb-5 mt-12'>
        <a href='https://showwcase.com/tahaimran' target='_blank' rel='noreferrer'   ><span className='cursor-pointer flex items-center  '><img src={Show} className='w-[70px]  hover:rotate-[360deg]  hover:duration-700 hover:scale-125  hover:shadow-2xl' alt="" /><p className='text-xl'>ShowwCase</p></span></a>
        <a href='https://twitter.com/tahaimran24' target='_blank' rel='noreferrer'  ><span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2 hover:rotate-[360deg]  hover:duration-700 hover:scale-125  hover:shadow-2xl' icon={faTwitter} /> <p className='text-xl'>Twitter</p> </span></a>
        <a href='https://linkedin.com/in/taha-imrann' target='_blank' rel='noreferrer'  > <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2 hover:rotate-[360deg]  hover:duration-700 hover:scale-125  hover:shadow-2xl' icon={faLinkedin} /><p className='text-xl'> LinkedIn</p></span></a>
        <a href='https://instagram.com/tuahaimran' target='_blank' rel='noreferrer'  ><span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2 hover:rotate-[360deg]  hover:duration-700 hover:scale-125  hover:shadow-2xl' icon={faInstagram} /><p className='text-xl'>Instagram</p></span></a>
        <a href='https://github.com/tahaimran' target='_blank' rel='noreferrer'   ><span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2 hover:rotate-[360deg]  hover:duration-700 hover:scale-125  hover:shadow-2xl' icon={faGithub} /><p className='text-xl'> GitHub</p></span></a>
        <a href='mailto:tahaimra.24@gmail.com' target='_blank' rel='noreferrer'  > <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2 hover:rotate-[360deg]  hover:duration-700 hover:scale-125  hover:shadow-2xl' icon={faInbox} /> <p className='text-xl'>MailMe</p></span></a>


      </div>
    </div>
  )
}

export default Contact