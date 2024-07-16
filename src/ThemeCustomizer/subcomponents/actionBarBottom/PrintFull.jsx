const PrintFull = ({ themeProperties, setShowMessage }) => {
  const printFull = () => {
    console.log(themeProperties);
    setShowMessage(themeProperties);
  };

  return (
    <>
      <button
        onClick={printFull}
        type="button"
        className="theme-button print-button"
      >
        Print Full
      </button>
    </>
  );
};
export default PrintFull;
