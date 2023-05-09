interface Work {
  id: number;
  name: string;
  image: string;
  views: number;
  createdAt: string;
}

interface Props {
  work: Work;
}

export function WorkDetails({ work }: Props) {
  return (
    <div className="shadow-md rounded-md overflow-hidden bg-neutral-800">
      <img src={work.image} alt={work.name} className="w-full h-48 object-cover" />
      <div className="px-4 py-3 ">
        <h2 className="text-lg font-semibold text-gray-300">{work.name}</h2>
        <p className="text-gray-400">Views: {work.views}</p>
        <p className="text-gray-400">Date: {work.createdAt}</p>
      </div>
    </div>
  );
}
