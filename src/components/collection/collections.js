import Section from "../UI/section/section";
import Classes from "./collections.module.css";
import Collection from "../UI/Collections/collection/collection";
const Collections = () => {
  const data = [
    {
      title: "Painting",
      description:
        "Explore Eden Gallery's collection of acrylic, oil and graffiti paintings.",
      src: "https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/18140637/desktop-_-new-website_12.07.2021paintings-2.jpg",
    },
    {
      title: "Painting",
      description:
        "Explore Eden Gallery's collection of acrylic, oil and graffiti paintings.",
      src: "https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/18140637/desktop-_-new-website_12.07.2021paintings-2.jpg",
    },
  ];
  return (
    <Section
      buttonText="Explore all Collections"
      buttonClassName={Classes.button}
      title="Collections"
      containerClassname={Classes.container}
      className={Classes.section}
    >
      {/* create collections based on the data arry */}
      {data.map((collection, index) => {
        return <Collection data={collection} />;
      })}
    </Section>
  );
};

export default Collections;
