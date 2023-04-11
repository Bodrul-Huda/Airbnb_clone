import Image from "next/image";

const SmallCard = ({ data: { img, location, distance } }) => {
  //   console.log(location);
  return (
    <>
      <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
        <div className="relative h-16 w-16">
          <Image
            className="rounded-lg"
            src={img}
            layout="fill"
            alt="location"
          />
        </div>
        <div className=" text-gray-500">
          <h3>{location}</h3>
          <h4>{distance}</h4>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
