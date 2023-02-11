import Divider from "@/components/common/Divider";

const guests = [
  {
    name: "John",
    email: "john@gmail.com",
    phone: "6281111111111",
    origin: "Bethabara",
    position: "Penatua",
    title: "Peserta Luar Biasa",
  },
  {
    name: "Doe",
    email: "doe@gmail.com",
    phone: "628222222222",
    origin: "Nazareth",
    position: "lainnya",
    title: "Peninjau",
  },
];
const Peserta = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Peserta Sidang</h2>
        <Divider />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Nama Peserta</th>
            <th>Asal Jemaat</th>
            <th>Jabatan</th>
            <th>Kepesertaan</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((item) => (
            <tr key={item.phone}>
              <td>{item.name}</td>
              <td>{item.origin}</td>
              <td>{item.position}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Peserta;
