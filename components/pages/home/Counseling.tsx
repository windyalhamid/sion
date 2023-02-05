import Divider from "@/components/common/Divider";

const Counseling = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Konseling</h2>
        <Divider />
      </div>
      <div className="text-center">
        <p className="py-6 text-2xl">
          Konseling dengan Psikolog Profesional, Berempati, dan Non-Judgmental.
          Bicarakan isi hatimu, temukan jalan keluar atas masalahmu.
        </p>
        <button className="btn btn-primary">Jadwalkan Konsultasi</button>
      </div>
    </div>
  );
};

export default Counseling;
