import Hero from "@/components/common/Hero";
import Counseling from "@/components/pages/home/Counseling";
import Livestream from "@/components/pages/home/Livestream";
import News from "@/components/pages/home/News";
import Stats from "@/components/pages/home/Stats";
import Warta from "@/components/pages/home/Warta";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Livestream />
      <Warta />
      <News />
      <Counseling />
    </div>
  );
}
