import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

const InfoCard = ({
  data: { img, location, star, price, total, title, description },
}) => {
  return (
    <>
      <div className="flex py-7 px-2 border-b cursor-pointer shadow-sm hover:opacity-80 hover:shadow-lg transition-transform duration-200 ease-out first:border-t">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="search"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between items-center">
            <p>{location}</p>
            <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
          </div>
          <h3 className="text-xl">{title}</h3>
          <div className="border-b w-10 pt-2" />
          <p className="text-gray-500 flex-grow pt-2 text-sm">{description}</p>
          <div className="flex justify-between items-end pt-5 ">
            <p className="flex items-center">
              <AiFillStar className="h-5 w-5 text-red-400" />
              {star}
            </p>
            <div>
              <p className="text-lg font-semibold pb-2 md:text-2xl">{price}</p>
              <p className="text-right font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
