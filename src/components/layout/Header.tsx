import { Utensils } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import React from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'


export default function Header() {
  return (
    <div className=" bg-black w-full md:h-24 h-16 sticky top-0 flex flex-row sm:justify-around 
    2xl:justify-evenly text-red-500 z-10" id='clr1'>

    <p className='font-extrabold sm:text-sm md:text-1xl lg:text-3xl 2xl:text-4xl text-1xl flex flex-row mt-5 '>
      <Utensils size={32} strokeWidth={2.75} className='animate-spin mr-1 md:mr-3 lg:mr-5'/>Flavour Fusion </p>

<ul className="md:flex md:flex-row mt-7 sm:gap-1 md:gap-2 lg:gap-5 2xl:gap-14 text-sm 
sm:text-xs lg:text-base 2xl:text-lg hidden">
    <li className='hover:text-white hover:scale-90 '><Link href="/">HOME</Link></li>
    <li className='hover:text-white hover:scale-90 '><Link href="./../about">ABOUT</Link> </li>
    <li className='hover:text-white hover:scale-90 '><Link href="./../services">SERVICES</Link></li>
    <li className='hover:text-white hover:scale-90 '><Link href="./../menu">MENU</Link></li>
    <li className='hover:text-white hover:scale-90 '><Link href="./../blogs">BLOGS</Link></li>
    {/* <li className='hover:text-white hover:scale-90 '><Link href="./../share blogs">SHARE BLOGS</Link></li>  */}
    <li className='hover:text-white hover:scale-90 '><Link href="./../contact">CONTACT</Link></li>
    <li className='hover:text-white hover:scale-90 '><Link href="./../booking">
    <Button variant={'destructive'}>BOOK A TABLE</Button></Link></li>  
</ul>

<Sheet>
  <SheetTrigger className="md:hidden ml-32"> <Menu/></SheetTrigger>

  <SheetContent>
    
  <ul className="flex flex-col gap-3">
    <li><Link href="/">HOME</Link></li>
    <li><Link href="./../about">ABOUT</Link> </li>
    <li><Link href="./../services">SERVICE</Link></li>
    <li><Link href="./../menu">MENU</Link></li>
    <li><Link href="./../blogs">BLOGS</Link></li>
    {/* <li><Link href="./../lifestyle">SHARE BLOGS</Link></li> */}
    <li><Link href="./../contact">CONTACT</Link></li>
    <li><Link href="./../booking"><Button>BOOK A TABLE</Button></Link></li>
    
</ul>
  </SheetContent>
</Sheet>


    </div>
  )
}
