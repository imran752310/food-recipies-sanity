import React from 'react'
import Image from 'next/image'

import banerImg from '@/Assets/image/bg4.jpg'

export const Banner = () => {
  return (
    <div className='relative my-20'>
       <div className='relative'>
            <Image className='w-full' src={banerImg}  alt=''/>
       </div>
        <div className='absolute top-[400px] text-white text-center mx-20'>
            <h1 className='text-[72px] hover:text-green-400'>Gluten Free Receipies</h1>
            <p className='mb-24'>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>

            <button className='bg-green-600 text-white border-none p-5 my-4 hover:bg-green-700'>Discover all the receipies</button>
        </div>

    </div>
  )
}
