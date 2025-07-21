import React from 'react'

const footer = () => {
  return (
      <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
           <div className="logo font-bold text-xl text-green-600 flex">
                    &lt;
                    <span className="text-white">&nbsp;Safe </span>
                    <span className="hidden md:block">&nbsp;Credential&nbsp; </span>/&gt;
                    </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> In India</div>
        </div>
  )
}

export default footer
