import React from 'react'
import {Link} from 'react-scroll'
function Button({Text}) {
  return (
   <Link to='contact'> <button className="border-2 border-white hover:duration-500  hover:bg-[#E5515F]  w-[200px] rounded-xl">

      <p className='text-xl p-2'> {Text}</p> 
    </button>
    </Link>
  )
}

export default Button