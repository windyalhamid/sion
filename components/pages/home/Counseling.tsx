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
          <br />
          Bicarakan isi hatimu, temukan jalan keluar atas masalahmu.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRgiA4vRwb3p5k3G1-1uZbeylM0gGs6uwL0x4GjgVjjopOAw/viewform?usp=pp_url"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Jadwalkan Konsultasi
        </a>
      </div>
    </div>
  );
};

export default Counseling;
