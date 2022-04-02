import React from 'react'

function Testimonials() {
    return (
        <div id='testimonial'  className='container flex flex-col justify-center  mb-44'>
            <div className='text-center'>
                <h2 className='text-6xl font-semibold  text-white'>Testimonials</h2>
            </div>
            <div className=' flex flex-col items-center sm:flex-row sm:justify-evenly my-10 mt-28'>
                <div className='border-4 rounded-lg data    w-[450px] text-white p-5'>
                    <p className='mb-8 leading-8 '>Taha is a very fast learner and is a very sincere individual. He explores new technologies and is unafraid of trying our things.Avneesh on React JS and Next JS and demonstrated good business understanding apart from the programming and user skills.</p>
                    <div className='flex justify-start items-center'>
                        <img className='w-12 rounded-sm' src="https://www.avneesh.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdidkcszrq%2Fimage%2Fupload%2Fv1638000951%2FScreenshot_2021-11-27_134430_fqtfqh.png&w=256&q=75" alt="" />
                        <h4>Name</h4>
                    </div>
                </div>
                <div className='border-4 rounded-lg data  w-[450px] text-white p-5'>
                    <p className='mb-8 leading-8'>Taha is a very fast learner and is a very sincere individual. He explores new technologies and is unafraid of trying our things.Avneesh on React JS and Next JS and demonstrated good business understanding apart from the programming and user skills.</p>
                    <div className='flex justify-start items-center'>
                        <img className='w-12 rounded-sm' src="https://www.avneesh.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdidkcszrq%2Fimage%2Fupload%2Fv1638000951%2FScreenshot_2021-11-27_134430_fqtfqh.png&w=256&q=75" alt="" />
                        <h4>Name</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials