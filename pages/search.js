import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

const Search = ({ results }) => {
  const router = useRouter();
  // console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />
      {/* Search Result */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  // Request data for once and then save that object data in the
  // file -"../Response" then turn the useDummyData to "True" this
  // can save your data request which is currently limited to 100
  // request per day.
  const useDummyData = false;

  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After the SERVER has rendered... Pass the result to the client...
  return {
    props: {
      results: data,
    },
  };
}
