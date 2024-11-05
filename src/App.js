import Form from "./main/Form";
// import Content from "./main/Content";
import Table from "./main/Table";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [itemType, setItemType] = useState("users");
  const [contentType, setContentType] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${API_URL}${itemType}`);
        if (!response.ok) throw Error("Failed to load API");
        const loadedContent = await response.json();
        setContentType(loadedContent);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    fetchContent();
  }, [itemType]);

  return (
    <div className="dataChallenge">
      <Form itemType={itemType} setItemType={setItemType} />
      {fetchError && <p className="text-danger">{`Error: ${fetchError}`}</p>}
      {/* {!fetchError && <Content contentType={contentType} />} */}
      {!fetchError && <Table contentType={contentType} />}
    </div>
  );
}

export default App;
