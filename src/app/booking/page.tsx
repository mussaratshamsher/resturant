import PlayButton from '@/components/themes/PlayButton'

import React from 'react'

export default function Booking() {
  return (
    <div>
      <h1 className='text-center underline font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-7xl mt-2 md:mt-16 
      lg:mt-5 2xl:py-16 ' id='clr2'>Reservation</h1>
  
    <div className=' h-auto flex flex-col md:grid md:grid-cols-2'>
{/* grid 1  */}

<div className='grid grid-cols-2 grid-rows-2 gap-2 md:gap-5 mt-2 md:mt-10 '>
<div className='col-span-2 '><PlayButton src="/videos/video3.mp4" /></div>
<div className='col-span-1 '><PlayButton src="/videos/video1.mp4"  /></div>
 <div className=''> <PlayButton src="/videos/video2.mp4" /></div>
                    
 </div> 

{/* grid 2  */}

<div  className='-mt-20 md:mt-10 lg:mt-5 xl:mt-10'>
<h1 className=' mt-0 lg:mt-10 text-center font-bold text-xl md:text-2xl lg:text-4xl 2xl:text-8xl font-serif 2xl:mt-20'>
  Book A Table Online</h1>
<div className='grid grid-cols-2 m-2 md:m-5 gap-2 md:gap-5 2xl:mx-16 lg:gap-10 xl:mt-14 2xl:gap-20'>

<input type="text" placeholder='Your Name' 
className='p-3 2xl:p-10 border rounded-sm border-red-300 shadow-md'/>
<input type="Email" placeholder='Your Email' 
className='p-3 2xl:p-10 border rounded-sm border-red-300 shadow-md'/>

<input type="text" placeholder='Date & Time' 
className='p-3 2xl:p-10 border rounded-sm border-red-300 shadow-md'/>
<select name="text" className='p-3  2xl:p-10 border rounded-sm border-red-300 shadow-md'> No of People
  <option selected>People 1</option>
  <option>People 1</option>
  <option>People 1</option>
</select>
<textarea name="text" placeholder='Special Request' 
className='col-span-2 p-3 xl:h-40  2xl:h-60 border rounded-sm border-red-300 shadow-md'></textarea>
 <button className='col-span-2 bg-rose-500 text-white p-5 xl:p-6 2xl:text-2xl 2xl:p-10 border rounded-sm border-red-300 shadow-md' 
 id=''>BOOK A TABLE</button>
</div>
</div>

</div>
</div>
    
  )
}
