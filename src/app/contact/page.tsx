import {  Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='w-full'>

      <h1 className='md:text-2xl text-1xl text-center mt-5 md:mt-10 font-bold font-serif' id='clr2'>Contact Us</h1>
      <h1 className='md:text-3xl text-2xl md:ml-14 ml-2 mt-5 font-bold font-serif'>Contact for any Query</h1>

      <div className=' grid md:grid-cols-2 grid-cols-1 mt-5'>
{/* maingrid 1 */}
        <div className='md:ml-20 ml-2'>
         
          <div> <h1 className='md:text-2xl text-1xl' id='clr2'> Booking <hr className='md:w-20 w-12 border-gray-400 border'/></h1> 
          <Mail className='mt-4' id='clr2'/><Link href="">book@flavour_fusion.com</Link>  </div>
          <div> <h1 className='md:text-2xl text-1xl mt-5' id='clr2'>General<hr className='md:w-20 w-12 border-gray-400 border'/></h1> 
          <Mail className='mt-4' id='clr2'/><Link href="">info@flavour_fusion.com</Link> </div>
          <div> <h1 className='md:text-2xl text-1xl mt-5' id='clr2'>Technical<hr className='w-20 border-gray-400 border'/></h1> 
         <Mail className='mt-4' id='clr2'/><Link href="">tech@flavour_fusion.com</Link> </div>
        </div>
{/* maingrid 2 */}
         <div className='ml-2'>

         <h1 className='text-2xl mt-5 mb-5 ml-2 md:hidden'> Send Your Message<hr className='w-60 border-gray-400 border'/></h1>


          <input type="text" placeholder='your name here' className='md:w-[248px] w-[300px] h-14 p-2 border border-red-300 rounded-md mr-2 mb-5'/> 
          <input type="text" placeholder='your email here' className='md:w-[246px] w-[300px] h-14  p-2 border border-red-300 rounded-md' /> <br />
          
          <input type="text" placeholder='Subject ' className='md:w-[500px] w-[300px] h-14 border p-2 border-red-300 rounded-md mt-4'/> <br />

          <textarea rows={4} id=""  placeholder='Message' className='md:w-[500px] w-[300px] h-32 p-2 border border-red-300 rounded-md mt-4'></textarea> <br />

          <button id='cont' className='md:w-[500px] w-[300px] h-14 border border-red-300 shadow-lg rounded-md mt-4 mb-10'>SEND MESSAGE</button>
         </div>

      </div>
      
      
      
    </div>
  )
}
