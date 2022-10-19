import { useEffect, useState } from "react";

import axios from "axios";
import SearchResult from "./SearchResult";

const Search = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const response =  await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsesarch: value,
        },
      });

      console.debug("response=", response);
    }, 1000);

    return () => {
        clearTimeout(timer);
    };
    
    // // axios.get
  }, [value]);

  return (
    <>
      <form className="ui form">
        <input
          type="text"
          placeholder="Enter a keyword"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <hr />
      <SearchResult />
      {/* <div>value: {value}</div> */}
    </>
  );
};

export default Search;
