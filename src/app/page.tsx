import Banner from "./components/Banner";
import BannerMobile from "./components/BannerMobile";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <main className="flex flex-col space-y-20 relative mx-10 top-20 ">
      <div className="hidden md:block">
        <Banner />
      </div>
      <div className="block md:hidden ">
        <BannerMobile />
      </div>
      <MainSection />
    </main>
  );
}
