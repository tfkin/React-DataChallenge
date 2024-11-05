import React from "react";
import Buttons from "../elements/Buttons";

const Form = ({ itemType, setItemType }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="d-flex justify-content-between"
    >
      <Buttons
        buttonText="users"
        itemType={itemType}
        setItemType={setItemType}
      />
      <Buttons
        buttonText="posts"
        itemType={itemType}
        setItemType={setItemType}
      />
      <Buttons
        buttonText="comments"
        itemType={itemType}
        setItemType={setItemType}
      />
    </form>
  );
};

export default Form;
