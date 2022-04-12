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
                        <img className='w-12 rounded-sm' src="https://profile-assets.showwcase.com/1617011486235-profile.jpeg" alt="" />
                        <div className='flex flex-col justify-between ml-2'>
                            <h4>Kapeel Kokane</h4>
                            <p>Dev @Microsoft, YouTuber, & Content creator</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly border-4 rounded-lg data mt-10 sm:mt-0 w-[400px] h-[300px]  sm:w-[450px] text-white p-5'>
                   <div>
                    <p className='mb-8 leading-8'>Muhammand Taha Imran is an enthusiastic developer and also one who is eager to share his learnings with the community for the betterment of others.</p>
                  </div>
                    <div className='flex justify-start items-center'>
                        <img className='w-12 rounded-sm' src="https://profile-assets.showwcase.com/1617011486235-profile.jpeg" alt="" />
                        <div className='flex flex-col justify-between ml-2'>
                            <h4>Kapeel Kokane</h4>
                            <p>Dev @Microsoft, YouTuber, & Content creator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials