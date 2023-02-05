import Divider from "@/components/common/Divider";

const Suggest = () => {
  return (
    <div className="h-[500px] bg-accent py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Saran & Pendapat</h2>
        <Divider />
      </div>
      <div className="text-center max-w-[1024px] mx-auto">
        <p className="py-6 text-2xl">
          Terima Kasih, untuk kunjungan Anda.
          <br />
          Punya pertanyaan atau saran dan pendapat?
        </p>
        <button className="btn">Sampaikan</button>
      </div>
    </div>
  );
};

export default Suggest;
