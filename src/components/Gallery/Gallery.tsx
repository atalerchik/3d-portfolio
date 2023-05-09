import { Link } from "react-router-dom";
import { WorkDetails } from "../WorkDetails/WorkDetails";

interface GalleryProps {
  works: any[];
  searchQuery: string;
}

export const Gallery: React.FC<GalleryProps> = ({ works, searchQuery }) => {
  const filteredWorks = works.filter((work) =>
    work.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredWorks.map((work) => (
        <Link key={work.id} to={`/works/${work.id}`}>
          <WorkDetails key={work.id} work={work} />
        </Link>
      ))}
    </div>
  );
};
