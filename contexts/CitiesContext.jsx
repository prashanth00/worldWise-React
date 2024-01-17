import React from "react";
import { Children } from "react";
import { createContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        console.log("Error occurred");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <CitiesProvider.Provider value={{ cities, isLoading }}>
      {Children}
    </CitiesProvider.Provider>
  );
}

export { CitiesContext };
