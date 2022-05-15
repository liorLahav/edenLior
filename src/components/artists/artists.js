import Classes from "./artists.module.css";
import Artist from "../UI/artists/artist/artist";
import NavButton from "../UI/artists/navButtons/navButton";
import Section from "../UI/section/section";
// show the artists list
const Artists = () => {
  const ArtistsData = [
    "Alec Monopoly",
    "Angelo Accardi",
    "Gal Yosef",
    "David Kracov",
    "Eduardo Kobra",
    "Dorit Levinstein",
    "Yoel Benharrouche",
  ];
  console.log(ArtistsData.length);
  return (
    <Section
      className={Classes.artists}
      title="Artists"
      buttonText="View Artists"
      buttonClassName={Classes.button}
      containerClassname={Classes.container}
    >
      {/* above is the default section for the site with this section data  */}
      {/* create all the artists tabs based on data arry */}
      {ArtistsData.map((artist, index) => {
        return (
          <Artist
            className={Classes.artist}
            id={"Artist" + index}
            key={index}
            artist={artist}
          />
        );
      })}
    </Section>
  );
};

export default Artists;
