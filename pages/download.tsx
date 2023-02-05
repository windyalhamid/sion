const downloads = [
  {
    title: "Pernikahan",
    description: "Deskripsi singkat tentang bagian ini",
    url: "/",
  },
  {
    title: "Pembaptisan",
    description: "Deskripsi singkat tentang bagian ini",
    url: "/",
  },
  {
    title: "Atestasi",
    description: "Deskripsi singkat tentang bagian ini",
    url: "/",
  },
  {
    title: "Materi Sidang Jemaat Renstra",
    description: "Deskripsi singkat tentang bagian ini",
    url: "/",
  },
  {
    title: "Jemaat GPM Sion 2021-2025",
    description: "Deskripsi singkat tentang bagian ini",
    url: "/",
  },
];
const Download = () => (
  <div className="max-w-[1024px] mx-auto py-8 space-y-4">
    {downloads.map((item) => (
      <div
        key={item.title}
        className="border p-4 rounded-xl cursor-default hover:text-primary"
      >
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-3xl font-medium">{item.title}</h2>
            <p className="font-light">{item.description}</p>
          </div>
          <div className="btn btn-primary self-center">Download</div>
        </div>
      </div>
    ))}
  </div>
);
export default Download;
