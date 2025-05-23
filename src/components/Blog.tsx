import React from "react";
import { Post } from "../../typing";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import { BsHeart } from "react-icons/bs";
import Image from "next/image";

const Blog = async () => {
  const query = `*[_type=='post'][0...3] {
         summary, title, image,
         "slug":slug.current,
          author->{bio,image,name}
       }`;

  const posts: Post[] = await client.fetch(query);
  console.log(posts);

  return (
    <div className="container m-auto my-5">
      {posts.map((post: Post) => (
        <div key={post.slug} className="flex p-5">
          <div className="w-1/3 cover ">
            <Image
              className=" w-70 h-70"
              src={urlForImage(post.image)}
              alt={post.title}
              width={300}
              height={300}
            />
          </div>

          <div className="ml-6 w-2/3">
            {/* Author */}
            <div className="flex mb-3 justify-between p-2">
              <div className="flex gap-4">
                <div>
                  <Image
                    className="rounded-full w-full h-full cover-fill"
                    src={urlForImage(post.author.image)}
                    alt="Author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-sm">
                  <h1>{post.author.name}</h1>
                  <i>{post.author.bio}</i>
                </div>
              </div>
              <div>
                <i className="bg-pink-600 rounded w-3 h-3">
                  <BsHeart />
                </i>
              </div>
            </div>

            <h1 className="text-lg font-medium mb-2">{post.title}</h1>
            <p className="text-gray-600 text-sm">
              {post.summary.slice(0, 200)}
            </p>
            <br />

            <Link
              className="bg-green-500 hover:bg-green-600 text-white border-none p-2 my-6"
              href={`blog/${post.slug}`}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

// import React from 'react'
// import { Post } from '../../typing';
// import { client } from '../../sanity/lib/client';
// import Link from 'next/link';
// import { urlForImage } from '../../sanity/lib/image';
// import { BsHeart } from 'react-icons/bs';
// import Image from 'next/image'

//  import b4 from '@/Assets/image/b4.jpg'
// import b2 from '@/Assets/image/b2.jpg'
// import b3 from '@/Assets/image/b3.jpg'

// export default Blog = async () => {

//   const query = `*[_type=='post'] {
//          summary,title,image,
//            "slug":slug.current
//        }`;

//       const posts:Post[] = await client.fetch(query);

//       console.log(posts);

//   return (
//     <div className='container m-auto'>
//        {
//              posts.map((posts:Post)=>(
//               <div className='flex p-3'>
//                                <div className='w-1/3'>
//                                  <Image className='' src={urlForImage(posts.image)} alt='b' width={300} height={300} />
//                                    </div>

//                                    <div className='ml-6 w-2/3'>

//                                     {/* Author */}
//                                        <div className='flex mb-3 justify-between p-2'>
//                                            <div className='flex gap-4'>
//                                                <div>
//                                              <Image className='rounded-full' src={b4} alt='b' width={50} height={50} />
//                                                </div>
//                                              <div className='text-sm'>
//                                                    <h1>Imran Khan</h1>
//                                                    <i>01/02/2024</i>
//                                                </div>
//                                            </div>

//                                            <div>
//                                                <i className='bg-pink-600 rounded w-3 h-3'><BsHeart /> </i>
//                                            </div>
//                                        </div>

//                                        <h1 className='text-lg font-medium mb-2'>{posts.title}</h1>
//                                        <p className='text-gray-600 text-sm'>{posts.summary}</p><br />

//                                        <Link
//                               className='bg-green-500 text-white border-none p-2 my-6' href={`blog/${posts.slug}`}>Read More</Link>
//                                   </div>

//                                 </div>
//              )
//              )
//              }

// {/* // import React from 'react'
// // import Image from 'next/image'
// // import b4 from '@/Assets/image/b4.jpg'
// // import b2 from '@/Assets/image/b2.jpg'
// // import b3 from '@/Assets/image/b3.jpg'
// // import { BsHeart } from 'react-icons/bs'
// // import Author from './Author'
// // import { client } from '../../sanity/lib/client'
// // import { urlForImage } from '../../sanity/lib/image'
// // import { Post } from '../../typing'
// // import Link from 'next/link'

// // const function Blog() {

// //   //   const query = `*[_type=='post'] | order(_createdAt asc){
// //   //   summary,title,image,
// //   //     "slug":slug.current
// //   // }`;

// //   // const post = await client.fetch(query);
// //   // console.log(post);

// //  const query = `*[_type=='post']{
// //     summary,title,image,
// //       "slug":slug.current
// //   }`;

// //   const posts:Post[] = await client.fetch(query);

// //   console.log(posts);

// //   return (
// //     <div className='container m-auto'>

// //      {/* main div start  */}
// //        <div className=' flex'>
// //           {/* colum 1 start */}
// //                <div className='w-2/3'>
// //             {/* post start */}
// //         {
// //             posts.map((posts:Post)=>(

// //                   <div className='flex p-3'>
// //                     <div className='w-1/3'>
// //                     <Image className='' src={urlForImage(posts.image)} alt='b' width={300} height={300} />
// //                     </div>

// //                     <div className='ml-6 w-2/3'>

// //                         {/* Author */}
// //                         <div className='flex mb-3 justify-between p-2'>
// //                             <div className='flex gap-4'>
// //                                 <div>
// //                                 <Image className='rounded-full' src={b4} alt='b' width={50} height={50} />
// //                                 </div>
// //                                 <div className='text-sm'>
// //                                     <h1>Imran Khan</h1>
// //                                     <i>01/02/2024</i>
// //                                 </div>
// //                             </div>

// //                             <div>
// //                                 <i className='bg-pink-600 rounded w-3 h-3'><BsHeart /> </i>
// //                             </div>
// //                         </div>

// //                         <h1 className='text-lg font-medium mb-2'>{posts.title}</h1>
// //                         <p className='text-gray-600 text-sm'>{posts.summary}</p><br />

// //                         <Link
// //                 className='bg-green-500 text-white border-none p-2 my-6' href={`blog/${posts.slug}`}>Read More</Link>
// //                     </div>

// //                   </div>

// //             )
// //             )

// //                  </div>

// //       //     {/* colum 1 End */}

// //       //     {/* colum 2 start */}
// //       //           <div className='w-1/3'>
// //       //              <Author />
// //       //           </div>
// //       //    {/* colum 2 End */}
// //        </div>
// //       //   {/* main div start  */}
// //     </div>
// // }

// // export default Blog

//  */}
