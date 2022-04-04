import React from 'react'
import Taha from '../../Images/taha.png'
import Hack from '../../Images/hackathon.PNG'
import showwAward from '../../Images/awards/showwAward.png'
import Lpic from '../../Images/awards/lpic.jpg'
import Button from '../Button/Button'

function About() {
    return (
        <div id='about'  className='container flex flex-col   justify-start  mb-44 '>
            <div className='text-center'>
                <h2 className='text-4xl sm:text-6xl font-semibold  text-white flex flex-row  items-center justify-evenly'>
                   About Taha 
                </h2>
            </div>
            <div className=" flex flex-col-reverse   sm:flex-row  items-center justify-center  sm:justify-evenly sm:items-start sm:mt-28">
                <div className='sm:w-1/2 flex flex-col items-center justify-evenly'>
                    <div className=''>
                        <p className='text-white text-base leading-10 sm:p-2 p-4'>My journey starts 8 years ago when I was 10 years old. I was a big fond of research and learning new stuff at that time like MS Office and exploring OS as time goes I was introduced to different fields like Graphic Design, Video Editing and then after 3 Years, I got to know about coding like how websites are being made ad tiny stuff relate to it. The first programming language I started to learn was Python. <br /> I still remember the moment when I write HelloWorld, and the output feeling was amazing. But after some days I failed to catch up. For the next 2 years, I totally focused on HTML & CSS and develop many sites. It gave me confidence and for the last 3 years, I am learning new stuff like react, typescript, javascript, and much more.<br /> Love to create content and engage the community. My Passion for code drives me to become Cloud Native Hackathon Winner and showwcase Dev Of the Week.</p>
                    </div>
                    <div className='flex flex-row  items-center justify-evenly w-[90%]  sm:w-[100%] mt-12'>
                        <a href='https://devpost.com/software/my-pocket' target='_blank' rel='noreferrer'><img src={Hack} className='hover:scale-125 hover:duration-500 w-[220px]' alt="" srcset="" /></a>
                        <a href='https://shorturl.at/kzGRV' target='_blank' rel='noreferrer'><img src={Lpic} className='hover:scale-125 hover:duration-500 w-[100px]' alt="" srcset="" /></a>
                        <a href='https://www.showwcase.com/thread/19489' target='_blank' rel='noreferrer'><img src={showwAward} className='hover:scale-125 hover:duration-500 w-[180px]' alt="" srcset="" /></a>

                    </div>
                    <div className='mt-8'>
                        <a href='https://bit.ly/3iV0dU3' target='_blank' rel='noreferrer'><Button Text='View More'/></a>
                    </div>

                </div>
                <div className='sm:w-1/3'>
                    <img className='taha rounded-full w-80   hover:rounded-xl hover:duration-500 cursor-pointer ' src={Taha} alt="" srcset="" />               
                </div>
            </div>
        </div>
    )
}

export default About