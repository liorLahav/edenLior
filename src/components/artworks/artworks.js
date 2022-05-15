import Artwork from "../UI/artworks/artwork/artwork";
import Section from "../UI/section/section";
import Classes from "./artworks.module.css";

const Artworks = () => {
  const data = [
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
    {
      title: "Monopoly and Richie Yacht Cruising Dubai Painting",
      Artist: "Alec Monopoly",
      type: "Mixed Media Painting",
      cm: "152x183 cm",
      inches: "59x72 in",
      src: "https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg",
    },
  ];
  return (
    <Section
      className={Classes.artworks}
      title="Artworks"
      buttonText="Explore Artworks"
      containerClassname={Classes.Conatiner}
      buttonClassName={Classes.button}
    >
      {/* create all the artworks tabs based on the data arry */}
      {data.map((artwork, index) => {
        return <Artwork key={index} data={artwork} />;
      })}
    </Section>
  );
};

export default Artworks;
