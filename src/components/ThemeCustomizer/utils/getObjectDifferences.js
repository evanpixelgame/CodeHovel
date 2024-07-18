// Function to get the differences between two objects
const getObjectDifferences = (initialObj, currentObj) => {
  const differences = {};

  for (const key in initialObj) {
    if (initialObj.hasOwnProperty(key) && initialObj[key] !== currentObj[key]) {
      differences[key] = currentObj[key];
    }
  }

  return differences;
};

// Example usage
const initialState = {
  primaryBgColor: "#3b3b3b",
  secondaryBgColor: "#343434",
  primaryAccentColor: "#9995db",
  secondaryAccentColor: "#ed6a5a",
  tertiaryAccentColor: "#fb8b24",
  primaryFontFamily: '"Roboto"',
  primaryTextColor: "#b4b4b4",
  secondaryTextColor: "#ffffff",
  mainTextFontSize: "40px",
  subTextFontSize: "16px",
  siteTitleFontFamily: '"Roboto"',
  siteTitleColor: "#ce721d",
  siteTitleFontSize: "24px",
  siteTitlePadLeft: "1%",
  navBgColor: "#f5f5f5",
  navLinkColor: "#3b3b3b",
  navLinkFontFamily: '"Inter"',
  headerWidth: "80%",
  headerHeight: "15%",
  headerBgColor: "#343434",
  footerWidth: "80%",
  footerHeight: "15%",
  footerBgColor: "#343434",
  togglePlacementTop: "5%",
  togglePlacementRight: "5%",
  themeSelectorBgColor: "#8b85d5",
  sideBorderBgColor: "#343434",
  sideBorderDisplay: "none",
  socialLinksGap: "20%"
};

const currentState = {
  primaryBgColor: "#4b4b4b", // Changed
  secondaryBgColor: "#343434",
  primaryAccentColor: "#9995db",
  secondaryAccentColor: "#ed6a5a",
  tertiaryAccentColor: "#fb8b24",
  primaryFontFamily: '"Roboto"',
  primaryTextColor: "#b4b4b4",
  secondaryTextColor: "#ffffff",
  mainTextFontSize: "42px", // Changed
  subTextFontSize: "16px",
  siteTitleFontFamily: '"Roboto"',
  siteTitleColor: "#ce721d",
  siteTitleFontSize: "24px",
  siteTitlePadLeft: "1%",
  navBgColor: "#f5f5f5",
  navLinkColor: "#3b3b3b",
  navLinkFontFamily: '"Inter"',
  headerWidth: "85%", // Changed
  headerHeight: "15%",
  headerBgColor: "#343434",
  footerWidth: "80%",
  footerHeight: "15%",
  footerBgColor: "#343434",
  togglePlacementTop: "5%",
  togglePlacementRight: "5%",
  themeSelectorBgColor: "#8b85d5",
  sideBorderBgColor: "#343434",
  sideBorderDisplay: "none",
  socialLinksGap: "20%"
};

const differences = getObjectDifferences(initialState, currentState);
console.log(differences); // Logs only the changed properties

export default getObjectDifferences;