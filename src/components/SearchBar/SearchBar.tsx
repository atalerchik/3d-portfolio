interface SearchBarProps {
  onSearchQueryChange: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearchQueryChange }) => {
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
        className="border text-white-900 rounded-full py-2 px-4 mr-2 bg-neutral-700 border-neutral-600 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        placeholder="Small Kitchen"
        onChange={handleInputChange}
      />
    </div>
  );
};
