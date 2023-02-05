import Divider from "@/components/common/Divider";

const Warta = () => {
  return (
    <div className="h-[500px] bg-base-200 py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Warta Jemaat</h2>
        <Divider />
      </div>
      <div className="text-center max-w-[1024px] mx-auto">
        <p className="py-6 text-2xl">
          Warta Jemaat adalah media terpenting dalam penyampaian informasi dari
          gereja kepada jemaat ataupun sebaliknya.
        </p>
        <button className="btn btn-primary">Download</button>
      </div>
    </div>
  );
};

export default Warta;
