import SearchResult from "./SearchResult";

const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.location} />;
      })}
    </div>
  );
};

export default SearchResultList;