import Classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={Classes.SearchBar}>
      <input placeholder="Search Artist, Artwork, Gallery" type="text" />
      <button type="submit">
        <img
          src="https://www.eden-gallery.com/assets/images/search%20icon.svg"
          loading="lazy"
        />
      </button>
    </form>
  );
};

export default SearchBar;
