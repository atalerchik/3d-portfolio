import { useState } from "react";
import { WorkDetails } from "../WorkDetails/WorkDetails";

interface GalleryProps {
  works: any[];
  searchQuery: string;
}

export const Gallery: React.FC<GalleryProps> = ({ works, searchQuery }) => {
  const [selectedWork, setSelectedWork] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (work: any) => {
    setSelectedWork(work);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredWorks = works.filter((work) =>
    work.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredWorks.map((work) => (
        <WorkDetails key={work.id} work={work} />
      ))}
      {showModal && selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <button
                className="absolute top-0 right-0 z-50 flex items-center justify-center w-12 h-12 text-black transition-colors duration-150 bg-white rounded-full focus:outline-none focus:shadow-outline hover:bg-gray-100"
                type="button"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">{selectedWork.name}</h2>
                <p className="mt-4 text-gray-600">{selectedWork.description}</p>
                <div className="mt-8">
                  <img src={selectedWork.imageUrl} alt={selectedWork.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
