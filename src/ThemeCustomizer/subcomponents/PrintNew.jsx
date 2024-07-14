import getObjectDifferences from "../utils/getObjectDifferences";

const PrintNew = ({ themeProperties, initialVarListRef }) => {
  const printNew = () => {
    //  console.log(themeProperties);
    // console.log(initialVarListRef);
    const differences = getObjectDifferences(
      initialVarListRef.current,
      themeProperties
    );
    console.log(differences);
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
