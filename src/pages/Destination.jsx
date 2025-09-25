import { useOutletContext, useParams } from "react-router";

export default function Destination() {
  const { slug } = useParams();
  const destinations = useOutletContext();
  if (!destinations) return <p className="message--loading">Loading...</p>;

  const destination = destinations.find((d) => d.slug === slug);

  return (
    destination && (
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="text-4xl font-bold text-primary text-center">
          {destination.title}
        </h1>
        <img
          alt={destination.title}
          className="w-full h-80 object-cover rounded-box shadow-md"
          src={destination.image}
        />
        <p className="text-lg">{destination.description}</p>
      </div>
    )
  );
}
