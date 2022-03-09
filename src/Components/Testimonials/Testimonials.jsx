import React from 'react'

function Testimonials() {
    return (
        <div className='container flex flex-col justify-center '>
            <h2 className='text-4xl font-bold  text-white'>Testimonials</h2>
            <div className=' flex overflow  flex-col md:flex-row  justify-evenly mt-10'>
                <div className='border-2 w-[400px] text-white p-5'>
                    <p>Avneesh is a very fast learner and is a very sincere individual. He explores new technologies and is unafraid of trying our things.Avneesh on React JS and Next JS and demonstrated good business understanding apart from the programming and user skills.</p>
                    <div className='flex justify-start'>
                        <img className='w-12' src="https://www.avneesh.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdidkcszrq%2Fimage%2Fupload%2Fv1638000951%2FScreenshot_2021-11-27_134430_fqtfqh.png&w=256&q=75" alt="" />
                        <h4>Name</h4>
                    </div>
                </div>
                <div className='border-2 w-[400px] text-white p-5'>
                    <p>Avneesh is a very fast learner and is a very sincere individual. He explores new technologies and is unafraid of trying our things.Avneesh on React JS and Next JS and demonstrated good business understanding apart from the programming and user skills.</p>
                    <div className='flex justify-start'>
                        <img className='w-12' src="https://www.avneesh.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdidkcszrq%2Fimage%2Fupload%2Fv1638000951%2FScreenshot_2021-11-27_134430_fqtfqh.png&w=256&q=75" alt="" />
                        <h4>Name</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials