// import React from 'react'

const Footer = () => {
  return (
     <section className='dark:bg-[#1F2937] bg-white shadow h-16'>
          <div className='w-[95vw] h-full max-w-[1170px] mx-auto flex items-center justify-center'>
              <p className="dark:text-white text-sm md:text-base tracking-widest text-black font-semibold">
                &copy; 2025 Crypto-Tracker
                <span className="ml-2">
                    All rights Reserved.
                </span>
              </p>
          </div>  
     </section>
  )
}

export default Footer
