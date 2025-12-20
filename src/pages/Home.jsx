import InfoBanner from "../components/InfoBanner";
import DepartmentGrid from "../components/DepartmentGrid";
import Services from "../components/Services";
import Location from "../components/Location";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full">

      <main>
        <Hero/>
        <InfoBanner />

        <DepartmentGrid />
        <Services />
        <Location />
      </main>
    </div>
  );
};

export default Home;