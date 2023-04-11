import Link from "next/link";
import Header from "../../components/header";
import Banner from "../../components/banner";
import SmallCard from "../../components/smallCart";
import MediumCard from "../../components/mediumCard";
import LargeCard from "../../components/largeCard";
import Footer from "../../components/footer";

export default function Home({ data, cards }) {
  // console.log(data);
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6 ">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {data?.map((data, i) => (
              <SmallCard data={data} key={i} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6 ">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cards?.map((card, i) => (
              <MediumCard card={card} key={i} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const { data } = await import("/data/data.json");

  const { cards } = await import("/data/data2.json");
  // console.log(card);

  // const exploreData = await fetch("URL");
  // const explore = exploreData.json();

  return {
    props: {
      data,
      cards,
    },
  };
};
