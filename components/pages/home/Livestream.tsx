import Divider from "@/components/common/Divider";
import Youtube from "@/components/common/Youtube";

const Livestream = () => {
  const youtube = {
    id: "24--iaPKef8",
    title:
      "Edufund x Belajar Bahasa Jerman: Sukses Berkarir dan Studi Melalui Ragam Program di Jerman",
  };
  return (
    <div className="max-w-[1024px] mx-auto py-32 space-y-16">
      <div>
        <h2 className="text-5xl font-bold text-center">Ibadah Online</h2>
        <Divider />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center self-center">
          <p className="py-6 text-2xl">
            Streaming langsung memungkinkan Anda berinteraksi dengan pemirsa
            secara waktu nyata melalui umpan video, obrolan, dan lainnya.
          </p>
          <button className="btn btn-primary">Subscribe</button>
        </div>
        <Youtube id={youtube.id} title={youtube.title} />
      </div>
    </div>
  );
};

export default Livestream;
