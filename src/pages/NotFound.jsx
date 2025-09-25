const NotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      <img
        alt="Not Found"
        className="w-full h-80 object-cover rounded-box shadow-md"
        src="/not_found.jpg"
      />
      <h1 className="text-4xl font-bold text-primary text-center">
        Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
