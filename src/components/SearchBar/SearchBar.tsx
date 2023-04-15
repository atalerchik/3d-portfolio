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
        className="border text-slate-900 rounded py-2 px-4 mr-2"
        onChange={handleInputChange}
      />
    </div>
  );
};
