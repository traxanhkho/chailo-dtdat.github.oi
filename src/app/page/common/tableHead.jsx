import React from "react";

const TableHead = ({columns}) => {
  return (
    <thead>
      <tr className="field-row">
        {columns.map((column) => (
          <th className="field-column" key={column.label || column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
