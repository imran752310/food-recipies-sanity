import Image from "next/image";
import HdImg from "@/Assets/image/bg2.jpg";

const Hero = () => {
  return (
    <section  className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src={HdImg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div data-aos="fade-right" className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/40 border-l-4 border-green-500 p-10 max-w-xl text-white">
        <h1 className="text-3xl font-bold mb-4">Delicios Homemade Burger</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique nisi vitae luctus sollicitudin. Fusce consectetur sem eget
          dui tristique, ac posuere arcu varius.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 font-semibold hover:bg-green-600 transition duration-300">
          See Recipe
        </button>
      </div>
    </section>
  );
};

export default Hero;
