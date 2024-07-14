import getObjectDifferences from "../utils/getObjectDifferences";

const PrintNew = ({ themeProperties, initialVarListRef }) => {
  const printNew = () => {
    //  console.log(themeProperties);
    // console.log(initialVarListRef);
    getObjectDifferences(themeProperties, initialVarListRef);
  };

  return (
    <>
      <button onClick={printNew} type="button" className="theme-button">
        Print New
        <br />
        CSS Vars
      </button>
    </>
  );
};
export default PrintNew;
