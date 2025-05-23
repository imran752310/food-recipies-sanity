import { Banner } from "@/components/Banner";
import Blogsection from "@/components/BlogSection";
import { Categories } from "@/components/Categories";
import Header from "@/components/Header";

export default async function Home() {

  return (
   <main>
    <Header />
    <Categories />
     <Blogsection />
    <Banner />
   </main>
  );
}
