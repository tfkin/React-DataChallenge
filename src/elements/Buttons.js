import React from "react";

const Buttons = ({ buttonText, itemType, setItemType }) => {
  return (
    <>
      <button
        className={buttonText === itemType ? "selected" : null}
        type="button"
        onClick={() => setItemType(buttonText)}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Buttons;
