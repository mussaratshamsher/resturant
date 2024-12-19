import { CookingPot, HandPlatter, Headphones, Omega, PhoneCall, SquareUserRound, UserPen, UserRoundPen, Utensils, UtensilsCrossed } from 'lucide-react'
import React from 'react'

export default function Services() {
  return (
    <div className='w-full h-auto font-serif'>

<div className='text-2xl text-center mt-5' id='clr2'><b> Our Services</b></div>

<h1 className='md:text-2xl md:ml-5 text-1xl ml-3 mt-5 mb-10'>Explore What we Offer</h1>


<div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 md:gap-10 md:ml-10 md:mr-10 ml-4 mr-4 gap-4 mb-10'>



<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<SquareUserRound size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Master Chef</h1>
<h1 className=' text-gray-600 hover:text-white'>Our highly skilled and experienced culinary professional 
  have expertise in cooking techniques and flavor profiles.</h1>
 
</div>

<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<HandPlatter size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Cattering</h1>
<h1 className='text-gray-600 hover:text-white'>Whether it’s a wedding, corporate event, or an intimate gathering, 
  we provide deliciously crafted menus </h1>
 
</div>

<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<CookingPot size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Private Chef</h1>
<h1 className=' text-gray-600 hover:text-white'>Enjoy a personalized dining experience in the comfort of your home. Our chefs will
   prepare specially designed to suit your tastes and needs.</h1>
 
</div>
<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<UserPen size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Cooking Classes </h1>
<h1 className=' text-gray-600 hover:text-white'>Join our fun and interactive cooking classes where you’ll
   learn to create exciting dishes and explore flavor pairings.</h1>
 
</div>


<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<Omega size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Flavor Consultation</h1>
<h1 className=' text-gray-600 hover:text-white'>How to enhance your dishes? Schedule a consultation
  with our flavor expert to discover unique combinations.</h1>
 
</div>

<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<UtensilsCrossed size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Quality Foods</h1>
<h1 className=' text-gray-600 hover:text-white'>Quality foods to safety standards and regulations to prevent contamination and ensure that
they are safe for consumption. Proper handling,storage, and preparation practices. </h1>
 
</div>

<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<PhoneCall size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>Online Order</h1>
<h1 className=' text-gray-600 hover:text-white'>We provide onDoor food services, where delicious meals are just a call away, ready to 
  satisfy your cravings any time of day or night. </h1>
 
</div>

<div className='w-72 h-72 pl-3 pr-3 border-2 bg-slate-100 animate__animated animate__slideInUp animate__delay-2s' id='serv'>
<Headphones size={48} strokeWidth={3} />
<h1 className='text-1xl text-black font-bold'>24/7 Services</h1>
<h1 className=' text-gray-600 hover:text-white'>Our restaurant proudly offers 24/7 service, ensuring that your favorite meals
   are available whenever hunger strikes.</h1>
 
</div>






</div>
        
    </div>
  )
}
