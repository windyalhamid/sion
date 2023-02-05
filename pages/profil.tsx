import Employe from "@/components/pages/profil/Employe";
import History from "@/components/pages/profil/History";
import Kostor from "@/components/pages/profil/Kostor";
import Majelis from "@/components/pages/profil/Majelis";
import Phmj from "@/components/pages/profil/Phmj";

export default function Home() {
  return (
    <div>
      <History />
      <Phmj />
      <Majelis />
      <Employe />
      <Kostor />
    </div>
  );
}
