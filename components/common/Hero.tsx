import Divider from "./Divider";

const Hero = () => (
  <div className="hero min-h-screen bg-primary">
    <div className="hero-content text-center text-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold">Pengumuman</h1>
        <Divider />
        <p className="py-6 text-2xl">
          Ibadah Minggu Pembukaan Persidangan ke-47 Klasis GPM Kota Ambon, dimulai pukul
          09.00 WIT di Gedung Gereja Nafiri Sion. Anda juga dapat menyaksikan secara live streaming.
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
