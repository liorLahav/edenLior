import Classes from "./Editorial.module.css";

const Editorial = (props) => {
  const data = props.data;
  return (
    <div className={Classes.Editorial}>
      <h2 className={Classes.title}>{data.title}</h2>
      <p>Art Blog</p>
      <p>
        {data.date} | {data.location}
      </p>
      <img src={data.src} alt="editorial photo" loading="lazy" />
      <p>{data.firstParagraph}</p>
      <a href="/">Read More</a>
    </div>
  );
};

export default Editorial;
