const PrintNew = ({ themeProperties }) => {
  const printNew = () => {
    console.log(themeProperties);
  };

  return (
    <>
      <button onClick={printNew} type="button" className="theme-button">
        Print New
        <br />
        Section
      </button>
    </>
  );
};
export default PrintNew;
