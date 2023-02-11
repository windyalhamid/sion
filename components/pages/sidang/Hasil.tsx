import Divider from "@/components/common/Divider";

const Hasil = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Hasil Sidang</h2>
        <Divider />
      </div>
      <div className="text-center">
        <div className="btn btn-primary">Download Hasil Sidang</div>
      </div>
    </div>
  );
};

export default Hasil;
