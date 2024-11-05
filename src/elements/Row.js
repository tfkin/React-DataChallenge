import React from "react";
import Cell from "./Cell";

const Row = ({ content }) => {
  return (
    <tr>
      {Object.entries(content).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default Row;
