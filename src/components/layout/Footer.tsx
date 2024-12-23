import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <div className='bg-black w-full md:h-[300px] md:p-10 py-14 px-5 md:pt-10'>
      
      <div className='grid md:grid-cols-4 gird-cols-1 text-white font-bold'>
    
    <div className='grid-1'>
      <h1 id='clr2' className=' text-lg md:text-1xl 2xl:text-2xl mb-4 mt-4'>Company <hr className='w-32 border-gray-500'/></h1>
      <ul>
    <li><Link href="./../about" className='hover:text-slate-300'>About</Link> </li>
    <li><Link href="./../services" className='hover:text-slate-300'>Services</Link></li>
    <li><Link href="./../contact" className='hover:text-slate-300'>Contact</Link></li>
    <li><Link href="./../booking" className='hover:text-slate-300'>Reservation</Link></li>
        <li><Link href="" className='hover:text-slate-300'>Privacy Policy</Link></li>
        
      </ul>
    </div>

<div className='grid-2'>
<h1 id='clr2' className=' text-lg md:text-1xl 2xl:text-2xl mb-4 mt-4'> Contact<hr className='w-32 border-gray-500'/></h1>
  <ul>
  <li className='flex flex-row mb-2 gap-1 hover:text-slate-300'><MapPin/> Saddar karachi</li>
  <li className='flex flex-row mb-2 gap-1 hover:text-slate-300'><Phone /> 0313-897989147</li>
  <li className='flex flex-row mb-2 gap-1 hover:text-slate-300  md:text-sm lg:text-xl 2xl:text-2xl'><Mail />info@food_fusion.com</li>
  <li className='flex flex-row mb-2 gap-2 hover:text-slate-300'><Twitter/><Facebook/><Instagram/><Youtube/> <Linkedin/></li>
  </ul>
</div>

<div className='grid-3'>
<h1 id='clr2' className='text-lg md:text-1xl 2xl:text-2xl mb-4 mt-4'>Opening<hr className='w-32 border-gray-500'/></h1>
  <ul>
    <li className='hover:text-slate-300'> Monday - Saturday</li>
    <li>9AM-10PM</li>
    <li className='mt-2 hover:text-slate-300'>SUNDAY</li>
    <li>10AM-12PM</li>
  </ul>
</div>

<div className='grid-4'>
<h1 id='clr2' className='text-lg md:text-1xl 2xl:text-2xl mb-4 mt-4 hover:text-slate-300'>News Letter <hr className='w-32 border-gray-500'/></h1>
<p className='text-sm md:text-base lg:text-xl'>Join for exciting updates, events, and opportunities</p>
<div className='w-72 md:w-60 xl:w-80 2xl:w-96 h-14 mt-4 md:-ml-2'>
<input type="email" placeholder='Add your email' className='p-2 w-52'/>
<Button variant={'destructive'} className='mt-2 md:-ml-16 xl:ml-0 hover:text-slate-300'>Send</Button>
 </div>
</div>

      </div>


    </div>
  )
}
