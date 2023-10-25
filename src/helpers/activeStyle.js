export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "var(--accent-color)" : "",
    textShadow: isActive ? "#306970 1px 0 1px" : "",
    backgroundCOlor: "transparent !important",
  };
};
