import Card from "@/components/Card";
import Divider from "@/components/common/Divider";

const News = () => (
  <div className="max-w-[1024px] mx-auto py-32 space-y-8">
    <div>
      <h2 className="text-5xl font-bold text-center">Kegiatan Jemaat</h2>
      <Divider />
    </div>
    <div className="max-w-[1024px] mx-auto grid grid-cols-2 gap-4">
      {[1, 2].map((item, index) => (
        <Card key={index} />
      ))}
    </div>
  </div>
);

export default News;
