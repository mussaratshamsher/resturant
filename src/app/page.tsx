
import Image from 'next/image'
import React from 'react'

import hero from "../../public/img/hero.jpg"
import heromain from "../../public/img/heromain.png"
import { Button } from '@/components/ui/button'
import About from './about/page'
import Services from './services/page'
import Menu from './menu/page'

export default function page() {
  return (
    <div className='w-full h-auto'>
    <div className='bg-black md:h-screen h-[500px]'>
<Image src={hero} alt="" width={500} height={500} className='relative w-full h-full opacity-15'/>
 
 
 <div className="">
<h1 className='absolute text-white md:font-extrabold font-bold md:text-7xl text-3xl md:top-60 top-20 ml-8 md:ml-10 font-serif'>
  Enjoy Our <br />Delecious Meal <br />
</h1>
<div className='absolute text-gray-200 md:top-96 top-28 ml-8 mt-10 md:text-2xl text-1xl font-semibold'>
<h1>Unleashing Mouthwatering Delights Daily!<br /> 
Where Flavor Meets Passion!"</h1> <br />
<div className='md:ml-40 ml-20'>
<Button variant={'outline'}> BOOK NOW</Button></div>
  <br /> 
</div>

<Image src={heromain} alt="" width={500} height={500}  
className="absolute  md:top-28 md:ml-[700px] md:w-[450px] md:h-[450px] w-[250px] h-[250px] top-[300px] ml-12
 animate__animated  animate__pulse animte_animation_delay-5s animate__infinite	infinite"/>
</div>

</div>    
{/* about  */}

<About />

{/* services */}
<Services />

{/* menu */}

<Menu />

{/* blogs */}














    </div>
  )
}
