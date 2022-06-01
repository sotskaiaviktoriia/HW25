import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  const className = type === "bold" ? "bold" : "";

  if (type === "bold") {
    return <p className={className}>Hello, {name}</p>;
  }

  return <p>Hello, {name}</p>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bold", "normal"]),
};

Title.defaultProps = {
  type: "normal",
};

export default Title;
