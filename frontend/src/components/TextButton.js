import "../styles/styles.scss";

const TextButton = ({ text, linkHref }) => {
  return (
    <a
      href={linkHref}
      className="lightHoverButton"
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default TextButton;
