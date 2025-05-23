import React from 'react'
import Image from 'next/image'
import LogoImg from '@/Assets/image/logo.png'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <div className=''>
        <div className='w-[90%] m-auto flex justify-between py-4 items-center'>
        <div>
        <Link href={"/"}>
        <Image
        src={LogoImg}
        width={180}
        height={180}
        alt="Picture of the author"
        />
       </Link>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-7 text-md font-medium font-serif'>
            <Link href={"/"} className='hover:text-green-700 font-semibold'>Home</Link>
            <Link href={"/"} className='hover:text-green-700'>Categories</Link>
            <Link href={"/About"} className='hover:text-green-700'>About</Link>
            <Link href={"/Contact"} className='hover:text-green-700'>Contact Us</Link>
          </ul>
        </div>
        </div>
    </div>
  )
}
