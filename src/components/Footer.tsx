import Image from 'next/image'
import React from 'react'
import LogoImg from '@/Assets/image/logo.png'
import LogoIm from '@/Assets/image/insta.jpg'
import LogoIm1 from '@/Assets/image/insta1.jpg'
import LogoIm2 from '@/Assets/image/insta7.jpg'
import LogoIm3 from '@/Assets/image/insta3.jpg'
import LogoIm4 from '@/Assets/image/insta4.jpg'
import LogoIm5 from '@/Assets/image/insta5.jpg'
import LogoIm6 from '@/Assets/image/insta6.jpg'
import { BsFacebook,BsTwitter, BsInstagram, BsWhatsapp,BsHeart} from 'react-icons/bs';

export const Footer = () => {
  return (
    <div>
        <div className="container m-auto items-center py-10">

          <div className='pb-8'>
            <div className="flex flex-wrap justify-center items-center mb-4">
            <Image src={LogoIm} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            <Image src={LogoIm1} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            <Image src={LogoIm2} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            <Image src={LogoIm3} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            <Image src={LogoIm4} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            <Image src={LogoIm5} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            <Image src={LogoIm6} alt="NLSN" className='hover:rounded-md  hover:border-4 border-green-600' width={180} height={180} />
            </div>
          </div>


            <div className="">
                <div className="flex justify-between items-center col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                    <div className="flex gap-10 ">
                        <a href="#"><BsFacebook className='text-gray-400' size={25}/></a>
                        <a href="#"><BsTwitter className='text-gray-400' size={25} /></a>
                        <a href="#"><BsInstagram className='text-gray-400' size={25}/></a>
                        <a href="#"><BsWhatsapp className='text-gray-400' size={25}/></a>
                    </div>
                    <div className="footer-logo">
                        <a href="index.html">
                          <Image src={LogoImg} alt="NLSN" width={180} height={180} />
                          </a>
                    </div>
                    <p className='font-[500]'>
Copyright © 2024 All rights reserved | Developed <BsHeart className='inline' /> by <a href="/" target="_blank">Muhammad Imran</a>
</p>
                </div>
            </div>
        </div>
    </div>
  )
}
