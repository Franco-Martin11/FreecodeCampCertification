import { useEffect, useState } from "react";
import { coloresTailwind500 } from "../constants/constants";
import { getRandomInt } from "../utils/getRandomInt";

const QuoteComponent = ({
  quote,
  author,
  reFetch,
}: {
  quote: string;
  author: string;
  category: string;
  reFetch: () => void;
}) => {
  const [colorIndex, setColorIndex] = useState<number>(getRandomInt(10));

  useEffect(() => {
    // Cambiar el color aleatoriamente cuando cambian la cita o el autor
    setColorIndex(getRandomInt(10));
  }, [quote, author]);

  const textReTweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" - ${author}`;

  return (
    <div
      className={`px-4 py-6 rounded-md max-w-sm min-h-xs ${coloresTailwind500[colorIndex]} flex flex-col gap-2`}
    >
      <p className="font-bold text-black">"{quote}"</p>
      <p className="text-black">{author}</p>
      <div className="flex flex-row justify-between aling-center">
        <a
          id="tweet-quote"
          title="Tweet this quote!"
          target="_blank"
          href={textReTweet}
          className="flex p-2 rounded-md w-fit bg-slate-400 hover:bg-slate-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
          </svg>
        </a>
        <button
          type="button"
          className="px-2 py-1 flex items-center w-fit rounded-md bg-slate-300 hover:bg-slate-500 text-black border-0 transition-colors"
          onClick={() => reFetch()}
        >
          New Quote
        </button>{" "}
      </div>
    </div>
  );
};

export default QuoteComponent;
