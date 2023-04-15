import { useState } from "react";
import { WorkDetails } from "../../components";

const Works: React.FC = () => {
  const works = [
    {
      id: 1,
      name: "Work 1",
      imageUrl: "https://via.placeholder.com/150",
      views: 10,
      date: new Date(),
    },
    {
      id: 2,
      name: "Work 2",
      imageUrl: "https://via.placeholder.com/150",
      views: 20,
      date: new Date(),
    },
    {
      id: 3,
      name: "Work 3",
      imageUrl: "https://via.placeholder.com/150",
      views: 30,
      date: new Date(),
    },
    {
      id: 4,
      name: "Work 4",
      imageUrl: "https://via.placeholder.com/150",
      views: 40,
      date: new Date(),
    },
    {
      id: 5,
      name: "Work 5",
      imageUrl: "https://via.placeholder.com/150",
      views: 50,
      date: new Date(),
    },
    {
      id: 6,
      name: "Work 6",
      imageUrl: "https://via.placeholder.com/150",
      views: 60,
      date: new Date(),
    },
    {
      id: 7,
      name: "Work 7",
      imageUrl: "https://via.placeholder.com/150",
      views: 70,
      date: new Date(),
    },
    {
      id: 8,
      name: "Work 8",
      imageUrl: "https://via.placeholder.com/150",
      views: 80,
      date: new Date(),
    },
    {
      id: 9,
      name: "Work 9",
      imageUrl: "https://via.placeholder.com/150",
      views: 90,
      date: new Date(),
    },
    {
      id: 10,
      name: "Work 10",
      imageUrl: "https://via.placeholder.com/150",
      views: 100,
      date: new Date(),
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">4D Designer Works Gallery</h1>
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <Gallery works={works} searchQuery={searchQuery} />
    </div>
  );
};

interface SearchBarProps {
  onSearchQueryChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchQueryChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchQueryChange(event.target.value);
  };

  return (
    <div className="flex flex-row items-center mb-4">
      <label htmlFor="search" className="mr-2">
        Search:
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="border text-slate-900 rounded py-2 px-4 mr-2"
        onChange={handleInputChange}
      />
    </div>
  );
};

interface GalleryProps {
  works: any[];
  searchQuery: string;
}

const Gallery: React.FC<GalleryProps> = ({ works, searchQuery }) => {
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

export { SearchBar, Gallery };

export default Works;
