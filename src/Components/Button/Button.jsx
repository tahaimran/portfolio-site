import React from 'react'
import { Link } from 'react-scroll'
function Button({ Text }) {
  return (
    <button className="border-2 border-white hover:duration-500  hover:bg-[#E5515F]  w-[200px] rounded-xl">

      <p className='text-xl p-1 text-white'> {Text}</p>
    </button>
  
  )
}

export default Button