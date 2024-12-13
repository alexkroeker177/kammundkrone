interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}