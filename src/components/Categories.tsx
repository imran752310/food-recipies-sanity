import React from 'react'
import img1 from '@/Assets/image/bg2.jpg'
import img2 from '@/Assets/image/bg3.jpg'
import Image from 'next/image'
export const Categories = () => {
  return (
    <>
    <div className='w-[90%] m-auto my-16'>
    <div>
      <h1 className=' font-bold text-[30px] mb-10 border-b-2 py-4'><span className='border-l-4 border-green-400 p-4'> Categories</span></h1>
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-5'>

            <div>
              <div className="relative ">
                <Image src={img1} alt='ct' width={400}  />
               <div className='absolute top-8  left-4'>
               <h1 className='text-white font-medium text-[30px]'>Strawberry Cake</h1>
                <p className='text-white text-sm pb-5'>Simple & Delicious</p>
                <button className='bg-green-500 hover:bg-green-600 text-white border-none p-2'>Read More</button>
               </div>
            </div>
            </div>

            <div>
              <div className="relative  ">
                <Image src={img2} alt='ct' width={400}  />
               <div className='absolute top-8  left-4'>
               <h1 className='text-white font-medium text-[30px]'>Strawberry Cake</h1>
                <p className='text-white text-sm pb-5'>Simple & Delicious</p>
                <button className='bg-green-500 hover:bg-green-600 text-white border-none p-2'>Read More</button>
               </div>
            </div>
            </div>

           
<div>
   <div className="relative  ">
                <Image src={img1} alt='ct' width={400}  />
               <div className='absolute top-8  left-4'>
               <h1 className='text-white font-medium text-[30px]'>Strawberry Cake</h1>
                <p className='text-white text-sm pb-5'>Simple & Delicious</p>
                <button className='bg-green-500 text-white hover:bg-green-600 border-none p-2'>Read More</button>
               </div>
            </div>
</div>
            

        </div>
    </div>
    </>
  )
}
