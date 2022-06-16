import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  return <p style={{ fontWeight: type }}>Hello, {name}</p>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bold", "normal"]),
};

Title.defaultProps = {
  type: "normal",
};

export default Title;
