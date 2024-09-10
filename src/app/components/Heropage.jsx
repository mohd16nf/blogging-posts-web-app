import Image from "next/image";
import Img from '../../assets/homeImg.jpg'


export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-full xl:mb-0 mb-10 px-8 relative xl:top-52 top-20">
      {/* Left Column */}
      <div className="xl:w-1/2 w-full text-center xl:text-left xl:ml-20 xl:mt-0 mt-16"> 
        <h1 className="lg:text-4xl text-3xl font-bold mb-6 text-orange-900">
          Discovered destinations tailored to your journey
        </h1>
        <p className="mb-8 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet purus at risus dictum, a pulvinar orci scelerisque. Donec euismod mi non ex mollis, et fermentum turpis tincidunt. Sed a pharetra quam. Morbi scelerisque orci nec quam malesuada tristique. Nulla et lacus ut eros bibendum convallis ut nec nisl. Vestibulum non commodo orci. Donec maximus nulla nec nunc varius, eget scelerisque lacus luctus.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-white text-black py-2 px-6 rounded-lg hover:bg-orange-900 transition duration-300">
            Explore
          </button>
          <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src={Img} // Replace with your image path
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
