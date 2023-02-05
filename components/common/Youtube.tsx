interface YoutubeProps {
  id: string;
  title: string;
}

const Youtube: React.FC<YoutubeProps> = ({ id, title }) => (
  <div className="overflow-hiden relative pb-[55%]">
    <iframe
      className="h-[316px] w-full absolute rounded-20"
      src={`https://www.youtube.com/embed/${id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

export default Youtube;
