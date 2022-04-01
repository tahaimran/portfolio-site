import React from 'react'
import ReactJS from '../../Images/Skills/react.png'
import Typescript from '../../Images/Skills/typescript.png'
import Tailwind from '../../Images/Skills/tailwind.png'
import JavaScript from '../../Images/Skills/js.png'
import Material from '../../Images/Skills/mui.png'
import Firebase from '../../Images/Skills/firebase.svg'
import Bootstrap from '../../Images/Skills/bootstrap.png'
import Styled from '../../Images/Skills/styled.png'
import Github from '../../Images/Skills/github.png'
import Surge from '../../Images/Skills/surge.png'
import Chart from '../../Images/Skills/chartjs-logo.svg'
import Git from '../../Images/Skills/git.png'

function Skills() {
  return (
    <div id='skill'  className='container flex flex-col mb-44'>
      <div className='text-center'>
        <h2 className='text-6xl font-semibold  text-white'>Skills</h2>
      </div>
      <div className='flex  flex-col justify-evenly  text-white my-10 '>
        <div className='flex flex-row justify-evenly '>
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={ReactJS} />
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Typescript} />
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={JavaScript} />
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Firebase} />

        </div>
        <div className='flex flex-row justify-evenly mt-10'>
          <img className='  w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Tailwind} />
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Material} />
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Bootstrap} />
          <img className='w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Styled} />

        </div>
        <div className='flex flex-row justify-evenly mt-10'>
          <img className='  w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Github} />
          <img className='  w-[70px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Surge} />
          <img className='  w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Git} />
          <img className='  w-[80px] h-[80px] cursor-pointer hover:scale-125 hover:duration-500' src={Chart} />

        </div>
      </div>
    </div>
  )
}

export default Skills