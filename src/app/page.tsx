
import Image from 'next/image'
import React from 'react'

import hero from "../../public/img/hero.jpg"
import heromain from "../../public/img/heromain.png"
import { Button } from '@/components/ui/button'
import About from './about/page'
import Services from './services/page'
import Menu from './menu/page'
import Link from 'next/link'
import Booking from './booking/page'

export default function page() {
  return (
    <div className='w-full h-auto'>
    <div className='bg-black  md:h-[550px] xl:h-[500px] 2xl:h-[1000px] h-[500px]'>
<Image src={hero} alt="" width={500} height={500} className='relative w-full h-full opacity-25'/>
 
 
 <div className=" lg:ml-20 2xl:ml-60">
<h1 className='hover:animate-ping absolute text-white md:font-extrabold font-bold lg:text-7xl 2xl:text-8xl text-2xl 2xl:top-80
 md:top-60 top-20 ml-8 md:ml-10 font-serif' >
  Enjoy Our <br />Delecious Meal <br />
</h1>
<div className='absolute text-gray-200  2xl:text-4xl 2xl:top-[600px] md:top-96 top-28 ml-8 mt-10 md:text-2xl text-1xl font-semibold'>
<h1>Unleashing Mouthwatering Delights Daily!<br /> 
Where Flavor Meets Passion!"</h1> <br />
<div className='md:ml-40 ml-20'> <Link href='/booking'>
<Button variant={'outline'}> BOOK NOW</Button></Link></div>
  <br /> 
</div>

<Image src={heromain} alt="" width={500} height={500}  
className="absolute md:top-36 md:left-80 lg:top-28 lg:ml-96 ml-12 2xl:top-[200px] 2xl:left-[900px]
xl:w-[450px] xl:h-[450px] md:w-[400] md:h-[400] w-[250px] h-[250px] top-[300px] 2xl:w-[800px] 2xl:h-[800px] 
 animate__animated  animate__pulse animte_animation_delay-5s animate__infinite	infinite"/>
</div>

</div>    
{/* about  */}


<About />

{/* services */}
<Services />

{/* menu */}

<Menu />

{/* reservation  */}
<Booking />














    </div>
  )
}
