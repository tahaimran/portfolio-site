import React from 'react'

function About() {
    return (
        <div className='flex flex-col items-center justify-center mt-10 md:justify-start md:items-start  '>
            <div>
                <h2 className='text-4xl font-bold  text-white'>About Me</h2>
            </div>
            <div className="container flex flex-col justify-start items-start  md:flex-row md:items-start ">
                <p className='text-white text-xl md:w-1/2'>I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
                <div className=''>
                    <img className='border-4 rounded-full w-72' src="https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default About