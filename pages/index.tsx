import Hero from "@/components/common/Hero";
import Counseling from "@/components/pages/home/Counseling";
import Livestream from "@/components/pages/home/Livestream";
import News from "@/components/pages/home/News";
import Stats from "@/components/pages/home/Stats";
import Warta from "@/components/pages/home/Warta";
import Location from "@/components/pages/home/Location";
import Carousel from "@/components/pages/home/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Stats />
      <Hero />
      <Livestream />
      <Warta />
      <News />
      <Counseling />
      <Location />
    </div>
  );
}
