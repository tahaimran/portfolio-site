import React from 'react'

function Button({Text}) {
  return (
    <button className="border-2 border-white hover:duration-500  hover:bg-cyan-500 p-2 w-[200px] rounded-xl">
        {Text}
    </button>
  )
}

export default Button