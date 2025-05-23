import React from 'react'
import Image from 'next/image'
import LogoImg from '@/Assets/image/logo.png'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <div className=''>
        <div className='container m-auto flex justify-between py-5 items-center'>
        <div>
        <Link href={"/"}>
        <Image
        src={LogoImg}
        width={200}
        height={200}
        alt="Picture of the author"
        />
       </Link>
        </div>
        <div>
          <ul className='flex gap-7 text-lg font-medium font-serif'>
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
