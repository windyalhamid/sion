import Divider from "@/components/common/Divider";

const Materi = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Materi Sidang</h2>
        <Divider />
      </div>
      <div className="text-center">
        <div className="btn btn-primary">Download Materi Sidang</div>
      </div>
    </div>
  );
};

export default Materi;
