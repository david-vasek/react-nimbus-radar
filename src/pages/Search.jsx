import { useState } from "react";

const Search = ({ fetchDailyWeather, savedLocationButton }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    parseInt(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput("");
    fetchDailyWeather(input);
    savedLocationButton(false);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        className="InputZip"
        name="zipcode"
        placeholder="Search a city's weather"
        value={input}
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
};

export default Search;
