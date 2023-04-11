import Image from "next/image";
import { ImSearch, ImMenu2 } from "react-icons/im";
import { FaGlobe, FaUser, FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState([1]);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetButton = () => {
    setSearchInput("");
  };

  const searchHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
        <div className="relative flex itemx-center h-10 cursor-pointer my-auto">
          <Link legacyBehavior href={"/"}>
            <Image
              src="/Airbnb_Logo_Bélo.svg.png"
              layout="fill"
              alt="Logo"
              objectFit="contain"
              objectPosition="left"
            />
          </Link>
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-300"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <ImSearch className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 w-8 md:mx-2" />
        </div>
        <div className="flex items-center justify-end text-gray-500 space-x-4">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <FaGlobe className="h-6 w-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <ImMenu2 className="h-6 w-6" />
            <FaRegUserCircle className="h-6 w-6" />
          </div>
        </div>
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["orange"]}
              onChange={handleSelect}
            />
            <div className="flex items-center justify-between border-b mb-4">
              <h2 className="text-2xl font-semibold">Number of Guests</h2>
              <div className="flex  items-center ">
                <FaUser className="h-5 w-5" />
                <input
                  type="number"
                  value={noOfGuest}
                  onChange={(e) => setNoOfGuest(e.target.value)}
                  min={1}
                  className="w-12 pl-2 text-lg outline-none text-red-500"
                />
              </div>
            </div>
            <div className="flex">
              <button
                onClick={resetButton}
                className="flex-grow text-gray-500 "
              >
                Cancel
              </button>
              <button
                onClick={searchHandler}
                className="flex-grow text-red-500 "
              >
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
