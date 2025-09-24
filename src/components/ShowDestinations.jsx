import { Link, useNavigate } from "react-router";

export default function ShowDestinations({ destinations }) {
  const navigate = useNavigate();
  return (
    <>
      {destinations?.map((destination) => (
        <div key={destination.id} className="card bg-base-100 shadow-md">
          <figure>
            <img
              alt={destination.title}
              className="h-48 w-full object-cover"
              src={destination.image}
            />
          </figure>

          <div className="card-body">
            <Link
              to={`/destinations/${destination.slug}`}
              className="card-title text-lg font-semibold hover:text-primary"
              data-discover="true"
            >
              {destination.title}
            </Link>
            <p>{destination.description}</p>
            {destinations.length > 3 && (
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/destinations/${destination.slug}`)}
                >
                  Visit
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
