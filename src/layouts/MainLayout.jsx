import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { destinationsLoader } from "../data/loader";
import Footerbar from "../components/Footerbar";

export default function MainLayout() {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await destinationsLoader();
      console.log(data);
      setDestinations(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8 mb-auto">
          <Outlet context={destinations} />
        </main>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <Footerbar />
        </footer>
      </div>
    </>
  );
}
