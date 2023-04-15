interface Work {
  id: number;
  name: string;
  imageUrl: string;
  views: number;
  date: Date;
}

interface Props {
  work: Work;
}

export function WorkDetails({ work }: Props) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={work.imageUrl} alt={work.name} className="w-full h-48 object-cover" />
      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800">{work.name}</h2>
        <p className="text-gray-600">Views: {work.views}</p>
        <p className="text-gray-600">Date: {work.date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
