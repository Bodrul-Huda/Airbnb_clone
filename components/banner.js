import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] md:h[500px] lg:h-[600px]">
        <Image
          alt="banner"
          src="/bannerAnb.webp"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
          <button className="bg-white rounded-full shadow-md m-3 py-4 px-10 text-purple-500 font-bold hover:shadow-xl active:scale-90 duration-150">
            I'm flexible
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
