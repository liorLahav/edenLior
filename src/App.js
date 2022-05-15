import "./App.css";
import Artists from "./components/artists/artists";
import Artworks from "./components/artworks/artworks";
import Collections from "./components/collection/collections";
import Editorials from "./components/editorials/editorials";
import Events from "./components/events/events";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import PhotoBar from "./components/photoBar/photoBar";
import Subscribe from "./components/Subscribe/subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoBar />
      <Artists />
      <Artworks />
      <Collections />
      <Editorials />
      <Events />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
