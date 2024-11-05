import React from "react";
import Items from "../elements/Items";

const Content = ({ contentType }) => {
  return (
    <main>
      <ul>
        {contentType.map((content) => (
          <Items key={content.id} content={content} />
        ))}
      </ul>
    </main>
  );
};

export default Content;
