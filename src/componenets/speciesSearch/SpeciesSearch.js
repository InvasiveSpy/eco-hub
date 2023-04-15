import React, { useState } from "react";
import axios from "axios";

function SpeciesSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(query);
    try {
      const response = await axios.get(
        "https://api.inaturalist.org/v1/search?q=" + query
      );

      let data = response.data.results;

      console.log({ data });
      // filter records that have this keys

      // species.record.id, species.record.name, species.record.default_photo;

      let filteredRecords = data.filter((species) => {
        return (
          species.record.id &&
          species.record.name &&
          species.record.default_photo
        );
      });

      let simpleRecord = filteredRecords.map((species) => {
        let record = {
          id: species.record.id,
          name: species.record.name,
          taxon_photos: species.record.default_photo
            ? species.record.default_photo.medium_url
            : "",
        };
        console.log({ record });
        return { record };
      });

      setResult(simpleRecord);
    } catch (error) {
      console.error({ error });
      setResult([]);
    }
  };

  //

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search for Species:
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {result.map((species) => (
        <div key={species.record.id}>
          <h3>{species.record.name}</h3>
          <img src={species.record.taxon_photos} alt={species.record.name} />
        </div>
      ))}
    </div>
  );
}

export default SpeciesSearch;
