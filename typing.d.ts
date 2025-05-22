import { Image } from 'next/image';

type Post = {
    author: any;
    title : string,
    summary : string,
    image: any,
    slug:string

}

type Author = {
    name: string,
    bio: string,
    image: any
}