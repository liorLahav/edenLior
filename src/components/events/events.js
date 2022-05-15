import Classes from "./events.module.css";
import Section from "../UI/section/section";
import Button from "../UI/Button/Button";
const Events = () => {
  const data = {
    date: "20.03.2022",
    title: "Alec Monopoly At The Eden...",
    description:
      "ALEC MONOPOLY DEBUTS NEW COLLECTION AT GRAND OPENING OF EDEN GALLERY DUBAI Throughout the week of a momentous grand opening, Eden Gallery’s new location in The Dubai Mall, the second biggest ...",
    buttonText: "Read More",
  };
  return (
    <Section
      className={Classes.events}
      title="Events"
      buttonText="Explore all Events"
      buttonClassName={Classes.button}
      containerClassname={Classes.container}
    >
      <img
        src="https://srv-1.eden-gallery.com/2022/03/31/62458f414d8b1-Dubai3.jpg"
        alt="event"
        loading="lazy"
      ></img>
      <div className={Classes.textHolder}>
        <p>{data.date}</p>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Button className={Classes.eventButton} theme="dark">
          {data.buttonText}
        </Button>
      </div>
    </Section>
  );
};

export default Events;
