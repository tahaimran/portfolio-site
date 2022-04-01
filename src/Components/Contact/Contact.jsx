import React from 'react'
import Show from '../../Images/Contact/show.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return (
    <div id='contact'  className='container flex flex-col '>
      <div>
        <h2 className='text-4xl font-bold  text-white'>Contact</h2>
      </div>
      <div className='flex justify-evenly flex-wrap  items-center  text-white font-bold my-5'>
        <span className='cursor-pointer flex items-center  '> <img src={Show} className='w-[70px] ' alt="" /><p className='text-xl'>ShowwCase</p></span>
        <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2' icon={faTwitter} /> <p className='text-xl'>Twitter</p> </span>
        <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2' icon={faLinkedin} /><p className='text-xl'> LinkedIn</p></span>
        <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2' icon={faInstagram} /><p className='text-xl'>Instagram</p></span>
        <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2' icon={faGithub} /><p className='text-xl'> GitHub</p></span>
        <span className='cursor-pointer flex items-center  ' ><FontAwesomeIcon size='2x' className='mr-2' icon={faInbox} /> <p className='text-xl'>MailMe</p></span>


      </div>
    </div>
  )
}

export default Contact