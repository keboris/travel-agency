import { useOutletContext } from "react-router";
import ShowDestinations from "../components/ShowDestinations";

const Destinations = () => {
  const destinations = useOutletContext();
  if (!destinations) return <p className="message--loading">Loading...</p>;

  return (
    <div className="space-y-10 px-4 max-w-7xl mx-auto">
      <title>Destinations | Travel Agency</title>
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Explore All Destinations
        </h1>
        <p className="text-lg text-base-content">
          Discover exciting and affordable travel spots curated just for
          software engineering students.
        </p>
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ShowDestinations destinations={destinations} />
      </section>
    </div>
  );
};

export default Destinations;
