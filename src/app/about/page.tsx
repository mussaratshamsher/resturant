import Image from 'next/image'
import React from 'react'

import about1 from '../../../public/img/about-1.jpg'
import about2 from '../../../public/img/about-2.jpg'
import about3 from '../../../public/img/about-3.jpg'
import about4 from '../../../public/img/about-4.jpg'

import team1 from '../../../public/img/team1.jpg'
import team2 from '../../../public/img/team2.jpg'
import team3 from '../../../public/img/team3.jpg'
import team4 from '../../../public/img/team4.jpg'

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from 'lucide-react'



export default function About() {
  return (
    <div className='w-full h-fit font-serif '>
    <div  className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>


   <div className='grid grid-cols-6 md:mt-32 mt-20 ml-14 gap-5'>

   <div className='col-span-3 animate__animated animate__zoomIn'>
    <Image src={about1} alt='' width={500} height={500} /></div>
   <div className='col-span-2 animate__animated animate__zoomIn'>
    <Image src={about2} alt='' width={500} height={500}/></div>
   <div className='col-span-2 animate__animated animate__zoomIn'>
    <Image src={about3} alt='' width={500} height={500}/></div>
   <div className='col-span-3 animate__animated animate__zoomIn'>
    <Image src={about4} alt='' width={500} height={500}/></div>
   </div> 

  <div className='md:mt-56 md:mr-10 ml-2 mr-2 mb-5'>

<h1 className='md:text-3xl text-1xl font-bold font-' id='clr2'>About Us</h1>
<p className='md:text-4xl text-2xl md:font-extrabold font-bold'>Welcome to Flavour Fusion
   <hr className='w-60 border border-gray-400'/></p> <br />

<p className='text-1xl'>Welcome to Flavour Fusion, where culinary art meets innovation! <br/> We are passionate creator behind this unique gastronomic 
adventure. We've always been fascinated by the way flavors can transform ordinary dishes into extraordinary experiences.
At Flavour Fusion, We believe that food should tell a story. Our mission is to blend diverse culinary traditions, using fresh, locally 
sourced ingredients to create dishes that surprise, delight, and inspire. Whether it’s integrating unexpected spices or merging 
international cuisines, our goal is to take your taste buds on a journey around the world.
Join me as we explore the endless possibilities of flavor and celebrate the joy of cooking together!</p>
<div className='grid grid-cols-2 mt-5 mb-5'>
  
  <div className='flex flex-row '>
  <div> <b className='text-3xl pt-5' id='clr2'>15</b> </div>
  <div><p>Years of  <br /> <b>Experience</b></p></div>
</div>

<div className='flex flex-row '>
  <div><b className='text-3xl ' id='clr2'>50</b></div>
  <div ><p>Popular  <br /> <b>Master Chefs</b></p></div>
</div>

</div>

<Button variant={'outline'}>Read More</Button>

</div>

    </div>
   
   {/* Team section */}
<div>
<p className='text-2xl text-center mt-5 md:mt-10' id='clr2'>Team members</p>
<h1 className='md:text-2xl md:ml-5 text-1xl ml-3 mt-5 mb-10'>Our Master Chefs</h1>

 <div className='grid grid-cols-1 md:grid-cols-4 gap-10 ml-10 mr-10 mb-10'>

<div className='w-70 h-80 px bg-slate-100 animate__animated animate__slideInUp animate__delay-4s'>
  <Image src={team1} alt='' width={500} height={500} 
  className='w-[200px] h-[200px] rounded-full ml-8 mt-2 '></Image>
<h1 className='text-center mt-8'> <b>Micaheal </b><br /> Personal Chef</h1>
 <p className='flex ml-24 mt-1 text-2xl' id='clr2'><Facebook/> <Twitter/> <Instagram/></p>
</div>

<div className='w-70 h-80 px bg-slate-100 animate__animated animate__slideInUp animate__delay-4s'>
  <Image src={team2} alt='' width={500} height={500} 
  className='w-[200px] h-[200px] rounded-full ml-8 mt-2'></Image>
<h1 className='text-center mt-8'> <b>Richard </b><br /> Kitchen Manager</h1>
 <p className='flex ml-24 mt-1 text-2xl' id='clr2'><Facebook/> <Twitter/> <Instagram/></p>
</div>

<div className='w-70 h-80 px bg-slate-100  animate__animated animate__slideInUp animate__delay-4s'>
  <Image src={team3} alt='' width={500} height={500} 
  className='w-[200px] h-[200px] rounded-full ml-8 mt-2'></Image>
<h1 className='text-center mt-8'> <b>Shawn </b><br /> Sous Chef</h1>
 <p className='flex ml-24 mt-1 text-2xl' id='clr2'><Facebook/> <Twitter/> <Instagram/></p>
</div>

<div className='w-70 h-80 px bg-slate-100  animate__animated animate__slideInUp animate__delay-4s'>
  <Image src={team4} alt='' width={500} height={500} 
  className='w-[200px] h-[200px] rounded-full ml-8 mt-2'></Image>
<h1 className='text-center mt-8'> <b>Thomas </b><br />Executive Chef</h1>
 <p className='flex ml-24 mt-1 text-2xl' id='clr2'><Facebook/> <Twitter/> <Instagram/></p>
</div>

 </div>

</div>
    </div>


  )
}







