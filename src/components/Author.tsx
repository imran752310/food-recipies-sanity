// import React from 'react'
// import b1 from '@/Assets/image/b1.jpg'
// import Image from 'next/image'
// import { client } from '../../sanity/lib/client';
// import { Author } from '../../typing';



// const Author = async () => {

//     const query = `*[_type=='author'][0...2] {
//         name, bio, image,
//       }`;
   
//  const author: Author[] = await client.fetch(query);
//  console.log(author);

//   return (
//     <div>
//        <div className='bg-green-500 text-white p-2 mb-4'>
//        Authors
//        </div>
//         {author.map((author)=>{

//        <div className='flex gap-4 my-4'>
//             <div>
//             <Image className='' src={b1} alt='b' width={70} height={70} />
//             </div>
//             <div className='text-sm'>
//                 <h1>Imran Khan</h1>
//                 <i>01/02/2024</i>
//             </div>
//         </div>
//     })}

//        </div>      
//   )
// }

// export default Author



import React from 'react';
import b1 from '@/Assets/image/b1.jpg';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import { Author as AuthorType } from '../../typing';
import { urlForImage } from '../../sanity/lib/image';

const Author = async () => {
  const query = `*[_type=='author'][0...3] {
    name, bio, image
  }`;

  const authors: AuthorType[] = await client.fetch(query);
  console.log(authors);

  return (
    <div>
      <div className='bg-green-500 text-white p-2 mb-4'>
        Authors
      </div>
      {authors.map((author) => (
        <div key={author.name} className='flex gap-4 my-4'>
          <div>
            <Image
              className=''
              src={urlForImage(author.image)}
            //   src={author.image ? author.image : b1} // Check if author has an image, otherwise use placeholder
              alt={author.name}
              width={70}
              height={70}
            />
          </div>
          <div className='text-sm'>
            <h1 className='font-semibold'>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Author;
