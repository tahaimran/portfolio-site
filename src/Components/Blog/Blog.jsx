import React from 'react'

function Blog() {
    return (
        <div className='flex flex-col my-48'>
            <div>
                <h2 className='text-4xl font-bold  text-white'>Blog</h2>
            </div>
            <div className='flex flex-col justify-center sm:flex-row sm:justify-evenly my-10'>
                <div className='border border-black-2 w-[400px] p-2'>
                    <h3 className='text-xl font-bold  text-white'>How To know hwat to know that it is?</h3>
                    <p className='text-base text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo, unde explicabo animi libero odio fugiat quasi maiores recusandae dolorum earum nostrum saepe aperiam doloremque deleniti vel id sed nam!</p>
                </div>
                <div className='border border-black-2 w-[400px] p-2'>
                    <h3 className='text-xl font-bold  text-white'>How To know hwat to know that it is?</h3>
                    <p className='text-base text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo, unde explicabo animi libero odio fugiat quasi maiores recusandae dolorum earum nostrum saepe aperiam doloremque deleniti vel id sed nam!</p>
                </div>
            </div>
        </div>
    )
}

export default Blog