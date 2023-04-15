import { useState } from "react";
import { SearchBar, WorkDetails } from "../../components";
import { Gallery } from "../../components/Gallery/Gallery";

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
      <h1 className="text-4xl font-bold text-blue-400 mb-4">3D Designer Works Gallery</h1>
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />
      <Gallery works={works} searchQuery={searchQuery} />
    </div>
  );
};

export default Works;
