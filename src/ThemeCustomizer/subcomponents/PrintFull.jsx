const PrintFull = ({ themeProperties }) => {
  const printFull = () => {
    console.log(themeProperties);
  };

  return (
    <>
      <button onClick={printFull} type="button" className="theme-button">
        Print New
        <br />
        Full List
      </button>
    </>
  );
};
export default PrintFull;
