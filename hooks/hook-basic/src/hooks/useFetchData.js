import {useState, useEffect} from 'react';

// Return the State variable to the caller 
function useFetchData(url) {
  const [data, setData] = useState(null);  // 0 is the default

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json)
      });
    }, [url]
  );

  return data;
}

export default useFetchData;