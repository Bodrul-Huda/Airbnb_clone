import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { format } from "date-fns";
import InfoCard from "../../components/infoCard";
import Map from "../../components/map";

const Search = ({ searchData }) => {
  // console.log(searchData);
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MM yyyy");
  const formatedEndDate = format(new Date(endDate), "dd MM yyyy");

  const rannge = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <>
      <div>
        <Header placeholder={`${location} | ${rannge}`} />
        <main className="flex">
          <section className="flex-grow pt-14 px-6 ">
            <p className="text-xs">
              300+ Stays ({rannge}) - for ({noOfGuest}) guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-5">
              {" "}
              Stays in {location}
            </h1>
            <div className=" hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <button className="buttonSearch">
                {" "}
                Cancellation Flexibility
              </button>
              <button className="buttonSearch"> Price</button>
              <button className="buttonSearch"> Rooms and Beds</button>
              <button className="buttonSearch"> More Filters</button>
            </div>
            <div className="flex flex-col space-y-4">
              {searchData.map((data, i) => (
                <InfoCard key={i} data={data} />
              ))}
            </div>
          </section>
          <section className="">
            <Map />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Search;

export async function getServerSideProps(ctx) {
  const { searchData } = await import("/data/searchData.json");

  return {
    props: {
      searchData,
    },
  };
}
