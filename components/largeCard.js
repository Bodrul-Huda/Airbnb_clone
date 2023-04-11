import Image from "next/image";

const LargeCard = () => {
  return (
    <>
      <div className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
          <Image
            src="/largeCard.webp"
            layout="fill"
            objectFit="cover"
            alt="Largecard"
            className="rounded-md"
          />
        </div>
        <div className="absolute top-36 left-12">
          <h3 className="capitalize font-semibold text-4xl mb-3 w-64">
            the greatest outdoors
          </h3>
          <p> Wishlist curbed by Airbn</p>
          <button className="bg-black rounded-md py-2 px-4 mt-4 text-white font-semibold hover:bg-gray-700">
            Get inspired
          </button>
        </div>
      </div>
    </>
  );
};

export default LargeCard;
