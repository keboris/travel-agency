import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6 text-center">
      <img
        alt="Not Found"
        className="w-full h-auto object-cover rounded-box shadow-md"
        src="/not_found.jpg"
      />
      <h1 className="text-4xl font-bold text-primary text-center">
        Page Not Found
      </h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
