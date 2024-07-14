const DragCheckbox = ({ isDraggable, handleCheckboxChange }) => {
  return (
    <>
      <label id="drag-checkbox">
        Enable Drag
        <input
          type="checkbox"
          checked={isDraggable}
          onChange={handleCheckboxChange}
        />
      </label>
    </>
  );
};
export default DragCheckbox;
