import "../styles/styles.scss";

const TextButton = ({ text, linkHref }) => {
  return (
    <a
      href={linkHref}
      className="lightHoverButton {
      "
    >
      {text}
    </a>
  );
};

export default TextButton;
