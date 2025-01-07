import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#0E0E0E] md:pl-[5vw] md:pr-[3vw]  lg:px-[4vw] flex flex-col md:flex-row pt-[5rem]'>
    <div className='md:w-[50%] order-2 md:order-1  '>
    <video src="https://loly.app/wp-content/uploads/2024/08/87477119-7334-46d1-bbb3-46e7e2bc5007.mp4" type="video/mp4" autoPlay loop muted className=''> </video>

    </div>
    <div className='md:w-[50%] text-[white] flex flex-col gap-[1rem] items-start mb-[1.5rem] order-1 md:order-2 justify-center md:pl-[2vw] lg:pl-0 px-[4vw] md:px-0'>
    <p className='uppercase text-[45px] md:text-[36px] lg:text-[80px] contrast-200 font-bold leading-[3rem] lg:leading-[6.3rem]'>it's simple, it's better.</p>
    <p className='text-[15px] font-bold contrast-200 lg:text-[20px] '>Loly is a social network that allows creators to monetize their content with the best possible conversion</p>
    <p className='text-[15px] font-bold contrast-200 lg:text-[20px]'>Loli was developed by content creator, for content creators.Better experience for fans, better conversions for creators. Try and earn +.</p>
    <button className='rounded-full bg-white font-bold text-black w-[55vw] md:w-[20vw] lg:w-[16vw] py-[1rem] mt-[1.5rem] hover:bg-[#7FFAA1] transition-colors duration-300 '>Open the application</button>


    </div>
    

      
    </div>
  )
}

export default Header
