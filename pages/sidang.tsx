import Hasil from "@/components/pages/sidang/Hasil";
import Materi from "@/components/pages/sidang/Materi";
import Peserta from "@/components/pages/sidang/Peserta";

export default function Sidang() {
  return (
    <div>
      <Peserta />
      <Materi />
      <Hasil />
    </div>
  );
}
