import PaginationButton from "./PaginationButton";

const SearchResults = ({ results }) => {
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-gray-600 text-md">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm line-clamp-1">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="text-xl font-medium text-blue-800 truncate group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
};

export default SearchResults;
