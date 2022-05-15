import List from "../UI/Footer/list/list";
import Classes from "./footer.module.css";

const Footer = () => {
  const data = [
    {
      title: "Galleries",
      list: [
        "Soho/Nyc",
        "Madison Ave/Nyc",
        "Aspen",
        "Miami/Florida",
        "New Bond St./London",
        "Mykonos/Greece",
      ],
      lastItem: "All Galleries",
    },
    {
      title: "Galleries",
      list: [
        "Soho/Nyc",
        "Madison Ave/Nyc",
        "Aspen",
        "Miami/Florida",
        "New Bond St./London",
        "Mykonos/Greece",
      ],
      lastItem: "All Galleries",
    },
    {
      title: "Galleries",
      list: [
        "Soho/Nyc",
        "Madison Ave/Nyc",
        "Aspen",
        "Miami/Florida",
        "New Bond St./London",
        "Mykonos/Greece",
      ],
      lastItem: "All Galleries",
    },
    {
      list: ["Home", "Artworks", "Contact Us", "About Eden", "Blog"],
    },
  ];
  const socialMedia = [
    "https://www.eden-gallery.com/assets/img/instagram.svg",
    "https://www.eden-gallery.com/assets/img/instagram.svg",
    "https://www.eden-gallery.com/assets/img/instagram.svg",
    "https://www.eden-gallery.com/assets/img/instagram.svg",
    "https://www.eden-gallery.com/assets/img/instagram.svg",
    "https://www.eden-gallery.com/assets/img/instagram.svg",
  ];
  return (
    <footer className={Classes.footer}>
      <img
        src="https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/04/22082721/logoeden.png"
        alt="logo"
        loading="lazy"
      ></img>
      <div className={Classes.container}>
        <div className={Classes.About}>
          <h2>About</h2>
          <p>
            Eden Gallery is a contemporary fine art gallery located in major
            cities in the United States and Europe. With the belief that art is
            a universal language that bridges cultures and forms human
            connections, we strive to create unforgettable exhibitions and
            events that bring color and inspiration to life’s every moment.
          </p>
          <div className={Classes.socialMediaConatiner}>
            <p>Follow Us</p>
            {socialMedia.map((icon, index) => {
              return <img src={icon} alt="icon" loading="lazy" />;
            })}
          </div>
        </div>
        {data.map((data, index) => {
          return (
            <List lastItem={data.lastItem} title={data.title}>
              {data.list.map((line, index) => {
                return <ul>{line}</ul>;
              })}
            </List>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
