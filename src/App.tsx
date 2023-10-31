import "./App.css";
import QuoteComponent from "./components/QuoteComponent";
import UseFetchQuotes from "./hook/UseFetchQuotes";

function App() {
  const { data: quotes, fetchData } = UseFetchQuotes();

  return (
    <>
      {quotes?.map(({ category, author, quote }) => (
        <QuoteComponent
          reFetch={fetchData}
          key={author}
          quote={quote}
          author={author}
          category={category}
        />
      ))}
    </>
  );
}

export default App;
