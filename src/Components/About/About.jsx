import React from 'react'
import Taha from '../../Images/taha.png'
function About() {
    return (
        <div className='container flex flex-col  justify-start  mb-44 '>
            <div className='text-center'>
                <h2 className='text-6xl font-semibold  text-white flex flex-row  items-center justify-evenly'>
                  <hr className='w-[300px]'/>  Who Is Taha <hr className='w-[300px]'/>
                    </h2>
            </div>
            <div className=" flex flex-col   sm:flex-row justify-center  sm:justify-evenly mt-5 ">
                <div className='sm:w-1/2 flex items-center'>
                    <p className='text-white text-xl leading-10	'>I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
                </div>
                <div className='sm:w-1/3'>
                    <img className='taha rounded-full w-64' src={Taha} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default About