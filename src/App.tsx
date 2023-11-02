import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import QuoteComponent from "./components/QuoteComponent";
import UseFetchQuotes from "./hook/UseFetchQuotes";

function App() {
  const { data: quotes, fetchData, isLoading } = UseFetchQuotes();

  return (
    <main className="flex flex-col px-2 py-4 gap-4 min-h-screen">
      <Navbar />
      <div className="flex justify-center h-full items-center flex-1">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {quotes?.map(({ category, author, quote }) => (
              <QuoteComponent
                reFetch={fetchData}
                key={author}
                quote={quote}
                author={author}
                category={category}
                isLoading={isLoading}
              />
            ))}{" "}
          </>
        )}     
      </div>
    </main>
  );
}

export default App;
