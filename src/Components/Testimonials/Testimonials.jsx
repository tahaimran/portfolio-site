import React from 'react'

function Testimonials() {
    return (
        <div id='testimonial' className='container flex flex-col justify-center  mb-44'>
            <div className='text-center'>
                <h2 className='text-6xl font-semibold  text-white'>Testimonials</h2>
            </div>
            <div className=' flex flex-col items-center justify-between  sm:flex-row sm:justify-evenly   mb-10 mt-28'>
                <div className='flex flex-col justify-evenly border-4 rounded-lg data mt-10 sm:mt-0 w-[400px] h-[300px]  sm:w-[450px] text-white p-5'>
                    <div>
                        <p className='mb-8 leading-8'>Muhammand Taha Imran is an enthusiastic developer and also one who is eager to share his learnings with the community for the betterment of others.</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <img className='w-14 rounded-sm' src="https://profile-assets.showwcase.com/1617011486235-profile.jpeg" alt="" />
                        <div className='flex flex-col justify-between ml-2'>
                            <h4 className='text-lg'>Kapeel Kokane</h4>
                            <p className='text-sm text-gray-300'>Dev @Microsoft, YouTuber, & Content creator</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly border-4 rounded-lg data mt-10 sm:mt-0 w-[400px] h-[300px]  sm:w-[450px] text-white p-5'>
                    <div>
                        <p className='mb-8 leading-8'>Muhammand Taha Imran is an enthusiastic developer and also one who is eager to share his learnings with the community for the betterment of others.</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <img className='w-14 rounded-sm' src="https://lh3.googleusercontent.com/a-/AOh14GgErE6_YKpgj7zMKv2anYEBnetUdZG8ZiWZ0jhbAg=s70-p-k-rw-no" alt="" />
                        <div className='flex flex-col justify-between ml-2'>
                            <h4 className='text-lg'>Imran Ali</h4>
                            <p className='text-sm text-gray-300'>Founder & CEO Meezan Enterprise</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials