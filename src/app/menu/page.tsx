import { Coffee, Sandwich, Utensils } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import menu1 from '../../../public/img/menu1.jpg'
import menu2 from '../../../public/img/menu2.jpg'
import menu3 from '../../../public/img/menu3.jpg'
import menu4 from '../../../public/img/menu4.jpg'
import menu5 from '../../../public/img/menu5.jpg'
import menu6 from '../../../public/img/menu6.jpg'
import menu7 from '../../../public/img/menu7.jpg'
import menu8 from '../../../public/img/menu8.jpg'





export default function Menu() {
  return (
    <div>
<h2 id='clr2' className="text-center text-2xl md:mt-10 mt-5" > Food Menu</h2>


<div className='grid grid-cols-3 mt-5 mb-5 gap-1 md:ml-96 md:mr-96'>
  
  <div className='flex flex-row md:justify-center'>
  <div> <b className='md:text-3xl pt-5' id='clr2'><Coffee size={40} strokeWidth={3} /></b> </div>
  <div className='text-gray-600'>Popular   <br /><hr className='w-16'/> <b className='text-black'>Breakfast</b></div>
</div>

<div className='flex flex-row'>
  <div><b className='md:text-3xl ' id='clr2'><Sandwich size={36} strokeWidth={3} /></b></div>
  <div className='text-gray-600'>Special <br /><hr className='w-16'/> <b className='text-black'>Lunch</b></div>
</div>

<div className='flex flex-row'>
  <div><b className='text-3xl' id='clr2'><Utensils size={36} strokeWidth={3} /></b></div>
  <div className='text-gray-600'>Lovely <br /><hr className='w-16'/> <b className='text-black'>Dinner</b> </div>
</div>

</div>

<h1 className='md:text-3xl md:ml-32 text-2xl ml-5'><b> Most Popular Items</b></h1>

{/* menu items */}

<div className=' grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-5 md:ml-32 md:mr-32 mt-10 mb-20'>

<div className='flex flex-row '>
 <Image src={menu1} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>Fruit Salad $5 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Fresh & Flavored, desired ingredients </b> </div>
</div>

<div className='flex flex-row'>
 <Image src={menu2} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black'><b> Chicken Qourma  $10 <br /> </b><hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Tender chicken simmeres in a rich, creamy, & aromatic spices </b></div>
</div>

<div className='flex flex-row '>
 <Image src={menu3} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>Greek Pizza $8 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Thicker crust & topped with feta cheese & organo</b> </div>
</div>

<div className='flex flex-row '>
 <Image src={menu4} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>Chapli Kabab $6 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Grilled Kabab minced meat, beaf or mutton </b> </div>
</div>

<div className='flex flex-row '>
 <Image src={menu5} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>Biryani & Pulao $15 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'> Beaf, Chicken or Mutton with mouth watering aroma</b> </div>
</div>

<div className='flex flex-row '>
 <Image src={menu6} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>Kabab with French fries$5 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Minced with Sauce & Spices </b> </div>
</div>

<div className='flex flex-row '>
 <Image src={menu7} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>California Pizza $12 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Grilled vegetables, seafood &  gourmet ingredients </b> </div>
</div>

<div className='flex flex-row '>
 <Image src={menu8} alt='' width={2000} height={2000}  className='w-20 h-20'/>
  <div className='text-black '> <b>Fish Fries $10 </b><br /> <hr className='w-32 h-2 '/>
  <b className='text-gray-500'>Delicious & versatile, different Flavoured </b> </div>
</div>


</div>




    </div>
  )
}
