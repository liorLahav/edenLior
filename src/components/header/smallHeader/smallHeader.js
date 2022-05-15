import Classes from "./smallHeader.module.css";

const SmallHeader = () => {
  const data = [
    "https://www.svgrepo.com/show/36538/menu.svg",
    "https://www.eden-gallery.com/assets/img/eden_logo_red.svg",
    "https://www.eden-gallery.com/assets/images/icon-heart.svg",
  ];
  return (
    <div className={Classes.SmallHeader}>
      {data.map((img, index) => {
        return <img src={img} alt="button" loading="lazy" />;
      })}
    </div>
  );
};

export default SmallHeader;
