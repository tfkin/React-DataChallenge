import React from "react";
import Row from "../elements/Row";

const Table = ({ contentType }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {contentType.map((content) => (
            <Row key={content.id} content={content} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
