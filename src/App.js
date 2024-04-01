import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SearchBar from "./components/SearchBar";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [books, setBooks] = useState([]);

  function getRandomGenre(genres) {
    if (genres.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * genres.length);
    return genres[randomIndex];
  }

  const genres = [
    "fiction",
    "fantasy",
    "mystery",
    "romance",
    "science fiction",
  ];
  const randomGenre = getRandomGenre(genres);

  useEffect(() => {
    if (!selectedGenre) {
      setSelectedGenre(randomGenre);
    }
    var apiURL = `https://www.googleapis.com/books/v1/volumes?q=${selectedGenre}+subject:${selectedGenre}&maxResults=20&key=AIzaSyB9Ah9vg2wy5M5_KnicIa-QNBU_sdpjHS8`;
    if (!selectedGenre) {
      apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20&key=AIzaSyB9Ah9vg2wy5M5_KnicIa-QNBU_sdpjHS8`;
    }
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setBooks(data.items || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedGenre, searchTerm]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedGenre={setSelectedGenre}
      />
      <Section books={books} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
