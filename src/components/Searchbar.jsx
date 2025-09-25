import { useNavigate } from "react-router";

export default function Searchbar() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/destinations");
  };

  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-primary">
        Find Your Next Student Adventure
      </h1>
      <img
        src="/travel.jpg"
        alt="Travel Agency"
        className="w-full h-60 object-cover rounded-box shadow-md"
      />
      <form
        onSubmit={handleSubmit}
        className="md:join w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-center px-4"
      >
        <input
          type="text"
          className="w-full input input-bordered join-item"
          name="origin"
          id="origin"
          placeholder="Origin"
        />
        <input
          type="text"
          className="w-full input input-bordered join-item"
          name="destination"
          id="destination"
          placeholder="Destination"
        />
        <input
          type="date"
          className="w-full input input-bordered join-item"
          name="departure"
          id="departure"
        />
        <input
          type="date"
          className="w-full input input-bordered join-item"
          name="return"
          id="return"
        />
        <button type="submit" className="btn btn-primary join-item">
          Search
        </button>
      </form>
    </section>
  );
}
