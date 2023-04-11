import Image from "next/image";

const MediumCard = ({ card: { img, title } }) => {
  //   console.log(title);
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" alt="MCard" className="rounded-md" />
      </div>
      <h3 className="font-semibold mt-3 text-xl text-gray-500">{title}</h3>
    </div>
  );
};

export default MediumCard;
