import Divider from "@/components/common/Divider";

interface CardWartaProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const CardWarta: React.FC<CardWartaProps> = (props: CardWartaProps) => (
  <div className="card w-full bg-base-100 shadow-xl">
    <figure>
      <img src={props.image} alt={props.title} />
    </figure>
    <div className="card-body tex-center">
      <h2 className="text-xl font-light">{props.title}</h2>
      <div className="btn btn-primary">Download</div>
    </div>
  </div>
);

const data = [
  {
    title: "Warta Jemaat Harian",
    description: "",
    image: "https://picsum.photos/500/700",
    url: "/",
  },
  {
    title: "Warta Jemaat Mingguan",
    description: "",
    image: "https://picsum.photos/500/700",
    url: "/",
  },
  {
    title: "Warta Jemaat Tahunan",
    description: "",
    image: "https://picsum.photos/500/700",
    url: "/",
  },
];

const Location = () => {
  return (
    <div className="bg-base-200 pt-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Lokasi Pelayanan</h2>
        <Divider />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127406.632228538!2d128.05593252182013!3d-3.7099469092318977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce832f3ffef93%3A0xf48470166cfe820a!2sGereja%20Nafiri%20Sion%20Ambon!5e0!3m2!1sen!2sid!4v1676130346928!5m2!1sen!2sid"
        className="w-full h-[300px]"
        loading="lazy"
      ></iframe>

      <div></div>
    </div>
  );
};

export default Location;
