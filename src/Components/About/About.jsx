import React from 'react'

function About() {
    return (
        <div className='container flex flex-col  justify-start  my-48 '>
            <div>
                <h2 className='text-4xl font-bold  text-white'>About Me</h2>
            </div>
            <div className=" flex flex-col   sm:flex-row justify-center  sm:justify-center mt-5 ">
                <div className='w-1/2 flex items-center'>
                    <p className='text-white text-xl '>I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
                </div>
                <div className='w-1/3'>
                    <img className='border-4 rounded w-72' src="https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default About