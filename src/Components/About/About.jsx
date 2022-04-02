import React from 'react'
import Taha from '../../Images/taha.png'
import Hack from '../../Images/hackathon.PNG'
import showwAward from '../../Images/awards/showwAward.png'
import Lpic from '../../Images/awards/lpic.jpg'
import Button from '../Button/Button'

function About() {
    return (
        <div id='about'  className='container flex flex-col  justify-start  mb-44 '>
            <div className='text-center'>
                <h2 className='text-6xl font-semibold  text-white flex flex-row  items-center justify-evenly'>
                    <hr className='w-[300px]' />  Who Is Taha <hr className='w-[300px]' />
                </h2>
            </div>
            <div className=" flex flex-col-reverse   sm:flex-row  justify-center  sm:justify-evenly sm:mt-28">
                <div className='sm:w-1/2 flex flex-col items-center justify-evenly'>
                    <div className=''>
                        <p className='text-white text-lg leading-10	'>I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
                    </div>
                    <div className='flex flex-row  items-center justify-evenly w-[100%] mt-12'>
                        <a href='https://devpost.com/software/my-pocket' target='_blank' rel='noreferrer'><img src={Hack} className='hover:scale-125 hover:duration-500 w-[220px]' alt="" srcset="" /></a>
                        <a href='https://shorturl.at/kzGRV' target='_blank' rel='noreferrer'><img src={Lpic} className='hover:scale-125 hover:duration-500 w-[100px]' alt="" srcset="" /></a>
                        <a href='https://www.showwcase.com/thread/19489' target='_blank' rel='noreferrer'><img src={showwAward} className='hover:scale-125 hover:duration-500 w-[180px]' alt="" srcset="" /></a>

                    </div>
                    <div className='mt-8'>
                        <a href='https://bit.ly/3iV0dU3' target='_blank' rel='noreferrer'><Button Text='View More'/></a>
                    </div>

                </div>
                <div className='sm:w-1/3'>
                    <img className='taha rounded-full w-64   hover:rounded-xl hover:duration-500 cursor-pointer ' src={Taha} alt="" srcset="" />               
                </div>
            </div>
        </div>
    )
}

export default About