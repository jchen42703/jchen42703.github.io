import "../styles/styles.scss";

export const DarkHeader = (props) => {
  return (
    <div className="dark-header">
      <h1>{props.text}</h1>
    </div>
  );
};
