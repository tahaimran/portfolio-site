import React from 'react'
import Button from '../Button/Button';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import Map from '../../Images/projects/map.PNG'
function Projects() {
    return (
        <div id='project' className='container flex flex-col  justify-start  mb-44 '>
            <div className='text-center'>
                <h2 className='text-6xl font-semibold  text-white flex flex-row  items-center justify-evenly'>
                    <hr className='w-[300px]' />Projects<hr className='w-[300px]' />
                </h2>
            </div>
            <div className='flex flex-col mt-28'>
                <div className='flex flex-col sm:flex-row justify-evenly '>
                    <div className='sm:w-1/3'>
                        <img className='rounded-lg border-4 border-[#E4515E] ' src={Map} alt="" />
                    </div>
                    <div className='sm:w-1/3'>
                        <h3 className='text-4xl sm:text-5xl mb-5 text-white text-semibold underline'>Google Map API</h3>
                        <p className='text-base text-white'>I’m a FullStack web developer. Focused on creating amazing UIs to solve business problems around the globe. I am participating in Hackathons and solving problems to build something cool and useful for the world. 🤓</p>
                        <a href='https://tahaimran.github.io/google-map-api-project/' target='_blank' rel='noreferrer'><Button Text='Visit'/></a>
                        <a href='https://github.com/tahaimran/google-map-api-project' target='_blank' rel='noreferrer'><Button Text='GitHub'/></a>

                    </div>

                </div>
                <div className='flex flex-col  sm:flex-row-reverse  justify-evenly mt-10'>
                    <div className='sm:w-1/3'>
                        <img className='rounded-lg border-4 border-[#E4515E]' src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/776/962/datas/gallery.jpg" alt="" />
                    </div>
                    <div className='sm:w-1/3'>
                        <h3 className='text-4xl sm:text-5xl mb-5 text-white text-semibold underline '>Etudiants</h3>
                        <p className='text-base text-white'>I’m a FullStack web developer. Focused on creating amazing UIs to solve business problems around the globe. I am participating in Hackathons and solving problems to build something cool and useful for the world. 🤓</p>
                         <a href='https://student-project-hackathon.web.app/' target='_blank' rel='noreferrer'><Button Text='Visit'/></a>
                        <a href='https://github.com/tahaimran/student-project-hackathon/' target='_blank' rel='noreferrer'><Button Text='GitHub'/></a>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects