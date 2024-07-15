
const handleInputChange = (setThemeProperties) => (property, value) => {
  let formattedValue = typeof value === "number" ? `${value}px` : value;
  if (property === "primaryFontFamily" && !value.startsWith('"')) {
    formattedValue = `"${value}"`;
  }

  setThemeProperties((prevProps) => ({
    ...prevProps,
    [property]: formattedValue,
  }));
};

export default handleInputChange;
