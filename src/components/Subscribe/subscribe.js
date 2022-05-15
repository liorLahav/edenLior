import Classes from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={Classes.subscribe}>
      <h2>Subscribe for Exclusive Updates</h2>
      <p>
        Be the first to receive information about new collections, new artists,
        and event invitations.
      </p>
      {/* info form */}
      <form className={Classes.subscribeForm}>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input
          type="email"
          className={Classes.email}
          placeholder="Email Adress"
        ></input>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
