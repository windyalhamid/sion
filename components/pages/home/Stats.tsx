import Divider from "@/components/common/Divider";
import { FaUser, FaUsers, FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";

const Stats = () => (
  <div className="text-center py-32 space-y-8">
    <div>
      <h2 className="text-5xl font-bold text-center">Statistik Jemaat</h2>
      <Divider />
    </div>
    <div className="stats stats-vertical lg:stats-horizontal border text-left">
      <div className="stat">
        <div className="stat-figure text-primary">
          <FaUsers size={67} />
        </div>
        <div className="stat-title">Jumlah Jemaat</div>
        <div className="stat-value text-primary">1.5K</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-primary">
          <FaUser size={44} />
        </div>
        <div className="stat-title">Kepala Keluarga</div>
        <div className="stat-value text-primary">50</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-primary">
          <AiOutlineMan size={48} />
        </div>
        <div className="stat-title">Laki-laki</div>
        <div className="stat-value text-primary">700</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-primary">
          <AiOutlineWoman size={48} />
        </div>
        <div className="stat-title">Perempuan</div>
        <div className="stat-value text-primary">800</div>
      </div>
    </div>
  </div>
);
export default Stats;
