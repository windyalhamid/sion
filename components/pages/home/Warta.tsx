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
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
    </div>
  </div>
);

const data = [
  {
    title: "Warta Harian",
    description: "",
    image: "https://picsum.photos/500/700",
    url: "/",
  },
  {
    title: "Warta Mingguan",
    description: "",
    image: "https://picsum.photos/500/700",
    url: "/",
  },
  {
    title: "Warta Tahunan",
    description: "",
    image: "https://picsum.photos/500/700",
    url: "/",
  },
];

const Warta = () => {
  return (
    <div className="bg-base-200 py-32 space-y-8">
      <div>
        <h2 className="text-5xl font-bold text-center">Warta Jemaat</h2>
        <Divider />
      </div>
      <div className="text-center max-w-[1024px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <CardWarta
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Warta;
