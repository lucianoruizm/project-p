import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Search2 from "./components/Search/Search2";

function App() {
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);

  let api = "http://localhost:8000/product/";

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  function handleSearch(e) {
    const q = e.target.value;

    if (!!q) {
      const search = fetchedData.filter((x) => {
        return (
          x.name.toLowerCase().includes(q) ||
          x.description.toLowerCase().includes(q)
        );
      });

      updateFetchedData(search);
    } else {
      updateFetchedData([]);
    }
}



  return (
    <div className="App">
      <h1 className="text-center mb-3">Productos</h1>
      <Search2 onSearch={handleSearch} />
      <div className="container">
      <div className="row">
        Filter component will be placed here
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={fetchedData} />
          </div>
        </div>
      </div>
      </div>
   </div>
  );
}

export default App;
