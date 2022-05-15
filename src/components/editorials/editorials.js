import Section from "../UI/section/section";
import Classes from "./editorials.module.css";
import Editorial from "../UI/Editorials/editorial/editorial";

const Editorials = () => {
  const data = [
    {
      title: "Painting Murals",
      date: "04.05.2022",
      src: "https://srv-1.eden-gallery.com/2022/05/4/627246cacdbfa-kobra.jpg",
      firstParagraph:
        "Eduardo Kobra creates magnificent murals of historical figures over time that have changed the way we function as a society, across all countries. Click here to see more from Kobra.",
      location: "Eden Gallery",
    },
    {
      title: "Painting Murals",
      date: "04.05.2022",
      src: "https://srv-1.eden-gallery.com/2022/05/4/627246cacdbfa-kobra.jpg",
      firstParagraph:
        "Eduardo Kobra creates magnificent murals of historical figures over time that have changed the way we function as a society, across all countries. Click here to see more from Kobra.",
      location: "Eden Gallery",
    },
    {
      title: "Painting Murals",
      date: "04.05.2022",
      src: "https://srv-1.eden-gallery.com/2022/05/4/627246cacdbfa-kobra.jpg",
      firstParagraph:
        "Eduardo Kobra creates magnificent murals of historical figures over time that have changed the way we function as a society, across all countries. Click here to see more from Kobra.",
      location: "Eden Gallery",
    },
  ];
  return (
    <Section
      className={Classes.editorials}
      title="Editorial"
      buttonText="Read More"
      buttonClassName={Classes.button}
      containerClassname={Classes.container}
    >
      {/* editorial cards created based on the data arry */}
      {data.map((data, index) => {
        return <Editorial key={index} data={data} />;
      })}
    </Section>
  );
};

export default Editorials;
