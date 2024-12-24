import React from 'react'
import Image from "next/image";
import Link from "next/link";
import LikeBlogs from '@/components/themes/LikeBlogs';
import CommentSection from '@/components/themes/CommentSection';
import { Button } from '@/components/ui/button';
import cart1 from '../../../public/img/cart1.png'
import cart2 from '../../../public/img/cart2.png'
import cart3 from '../../../public/img/cart3.png'
import cart4 from '../../../public/img/cart4.png'
import menu1 from '../../../public/img/menu1.jpg'
import menu3 from '../../../public/img/menu3.jpg'
import menu4 from '../../../public/img/menu4.jpg'
import menu5 from '../../../public/img/menu5.jpg'
import menu6 from '../../../public/img/menu6.jpg'
import menu8 from '../../../public/img/menu8.jpg'


const blogs = [
    { id:1, title: 'Lorem ipsum dolor sit', image: '/img/blog1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.' 
    },
    { id:2, title: 'Lorem ipsum dolor sit', image: '/img/blog2.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.' 
    },
    { id:3, title: 'Lorem ipsum dolor sit', image: '/img/blog3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.' 
    },
    { id:4, title: 'Lorem ipsum dolor sit', image: '/img/blog4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.' 
    },
    { id:5, title: 'Lorem ipsum dolor sit', image: '/img/blog5.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.' 
    }
]

export default function Blogs() {
  return (
    <div className='maindiv'>
    <h1 className='my-2 md:my-5 2xl:my-10 text-center text-md md:text-2xl 
    lg:text-4xl 2xl:text-8xl 2xl:mt-28 2xl:mb-28 font-bold ' id='clr2'>Read Our Blogs</h1>
   
    {/* grid layout  */}
    <div className=" md:mb-5 grid grid-cols-3 lg:grid-cols-3 mt-3 md:mt-5 lg:mt-10 lg:ml-20 lg:mr-20 lg:gap-20 2xl:ml-96 2xl:mr-96">
   {/* grid 1 */}
    <div className="col-span-2 lg:col-span-2 ml-2 md:ml-5 lg:ml-10 mr-2 lg:mr-5">

        {blogs.map((blg) => (
            <div key={blg.id}>
    <Link href={`/blogsdetail/${blg.id}`}>

<Image src={blg.image} alt="" width={500} height={500} className='xl:w-[700px] xl:h-72 hover:opacity-80'/>
<div className="flex flex-col md:flex-row gap-2 md:gap-10">
    <h1 className="text:sm lg:text-xl">Posted By: <b>Miller</b></h1>
    <h2 className="text:sm lg:text-xl">Post Date: 23/4/2024</h2>
    </div>

    <hr className="border-gray-400"/>
<h1 className='text-xl md:text-2xl lg:text-3xl 2xl:5xl p-1 md:p-2 lg:p-3 2xl:p-4 underline' id='clr2'>{blg.title}</h1>
<h2 className='text-xs font-thin md:text-lg p-1 md:p-2 lg:p-3 2xl:p-4'>{blg.description} 
    <Button variant={'ghost'}>Read more....</Button>
</h2>
    </Link>
     </div>          
        ))}                        
    
</div>

    {/* grid 2  */}
<div className='border-l-2 border-gray-400'>
    {/* catagories  */}
    <h1 className='pt-4 pb-2 text-xs font-thin md:text-sm lg:text-xl text-center underline' id='clr2'>Categories</h1>
    <ul className='border lg:p-5 ml-1 md:ml-2 lg:mr-5 xl:ml-16 font-bold text-center'>
    <li>Lorem ipsum </li><li>Lorem ipsum </li><li>Lorem ipsum </li><li>Lorem ipsum </li>
    <li>Lorem ipsum </li><li>Lorem ipsum </li><li>Lorem ipsum </li>
    <li>Lorem ipsum </li><li>Lorem ipsum </li><li>Lorem ipsum </li>
    </ul>

    {/* Recent Post  */}
    <h1 className='pt-4 pb-2 text-xs md:text-sm lg:text-xl text-center underline md:mt-20' id='clr2'>Recent Posts</h1>
{/* product 1  */}
<div className='flex flex-row gap-1 md:gap-3 ml-1 md:ml-2 lg:mr-5 xl:ml-16 py-2'>
<Image src={cart1} alt='' width={500} height={500} className='w-7 h-7 md:w-24 md:h-20 2xl:w-40 2xl:h-24' id='blog'/>
          <div className=' text-sm'>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2 '>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
           </div> 
          </div>
          {/* product 2  */}
<div className='flex flex-row gap-1 md:gap-3 ml-1 md:ml-2 lg:mr-5 xl:ml-16 py-2'>
<Image src={cart2} alt='' width={500} height={500} className='w-7 h-7 md:w-24 md:h-20 2xl:w-40 2xl:h-24' id='blog'/>
          <div className='text-sm '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
           </div> 
          </div>
{/* product 3  */}
<div className='flex flex-row gap-1 md:gap-3 ml-1 md:ml-2 lg:mr-5 xl:ml-16 py-2'>
<Image src={cart3} alt='' width={500} height={500} className='w-7 h-7 md:w-24 md:h-20 2xl:w-40 2xl:h-24' id='blog'/>
          <div className='text-sm '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
           </div> 
          </div>
          {/* product 4  */}
<div className='flex flex-row gap-1 md:gap-3 ml-1 md:ml-2 lg:mr-5 xl:ml-16 py-2'>
<Image src={cart4} alt='' width={500} height={500} className='w-7 h-7 md:w-24 md:h-20 2xl:w-40 2xl:h-24' id='blog'/>
          <div className=' text-sm'>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
           </div> 
          </div>
          {/* Popular Tags  */}
          <h1 className='pt-4 pb-2 text-xs md:text-sm lg:text-xl text-center underline md:mt-10 lg:mt-20 lg:mb-5' id='clr2'>Popular Tags</h1>

<div className='grid grid-cols-1 md:grid-cols-3 lg:gap-2 gap-1 2xl:gap-5 xl:ml-10'>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'>Sandwich </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'>Tikka </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'> Bbq</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'>Biryani </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'>Shaurma</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'>Health </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'> Fastfood</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'> Food</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'> Pizza</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'> Chicken</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-red-300'> Burger</p>

 </div>

{/* Photo Gallery  */}
<h1 className='pt-4 pb-2 text-xs md:text-sm lg:text-xl text-center underline md:mt-10 lg:mt-20 lg:mb-5' id='clr2'>Gallery</h1>
<div className='grid grid-cols-3 grid-rows-2 gap-1 mt-2 md:mt-7 lg:ml-10 border shadow-sm p-2'>
<Image src={menu1} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={menu3} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={menu8} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={menu4} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={menu5} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
<Image src={menu6} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90 2xl:w-96'/>
</div>


</div>
   
    </div>


    </div>
  );
}



