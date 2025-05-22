// import { Banner } from "@/components/Banner";
import { Banner } from "@/components/Banner";
import Blogsection from "@/components/BlogSection";
// import { Categories } from "@/components/Categories";
// import Header from "@/components/Header";

import { Categories } from "@/components/Categories";
import Hero from "@/components/Hero";
import RecipeGrid from "@/components/RecipeCard";

export default async function Home() {

  return (
   <main>
    <Hero />
    <Categories />
     <Blogsection />
    <Banner />
    <RecipeGrid />
   </main>
  );
}
