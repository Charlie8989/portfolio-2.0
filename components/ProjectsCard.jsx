const ProjectCard = ({ title, image, desc, link }) => {
  return (
    <div className="relative min-w-full h-[60vh] rounded-2xl overflow-hidden bg-zinc-900 text-white flex flex-col group">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover object-top"
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex items-center justify-center bg-black/40 transition">
        <a href={link} target="_blank" className="flex items-center gap-2 cursor-pointer text-white px-8 py-2 rounded-full border">
          Visit Here
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
