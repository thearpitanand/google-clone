import Head from "next/head";
import Header from "../components/Header";
const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Result</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Result */}
    </div>
  );
};

export default Search;
