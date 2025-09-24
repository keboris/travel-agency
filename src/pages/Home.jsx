import { useOutletContext } from "react-router";
import Searchbar from "../components/Searchbar";
import WhyBook from "../components/WhyBook";
import ShowDestinations from "../components/ShowDestinations";

const Home = () => {
  const destinations = useOutletContext();
  if (!destinations) return <p className="message--loading">Loading...</p>;
  const popularIds = [2, 1, 12];
  const popularDestinations = popularIds
    .map((id) => destinations.find((dest) => dest.id === id))
    .filter(Boolean);
  /*const popularDestinations = destinations.filter((dest) =>
    popularIds.includes(dest.id)
  );*/

  return (
    <div className="space-y-16">
      <title>Travel Agency</title>
      <Searchbar />
      <WhyBook />
      <section className="space-y-6 px-4">
        <h2 className="text-3xl font-bold text-secondary text-center">
          Popular Destinations
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ShowDestinations destinations={popularDestinations} />
        </div>
      </section>
    </div>
  );
};

export default Home;
