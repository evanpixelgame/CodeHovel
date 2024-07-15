
const handleInputChangeWithLogging = (handleInputChange) => (property, value) => {
  console.log(`${property} updated to:`, value);
  handleInputChange(property, value);
};

export default handleInputChangeWithLogging;