import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.value);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="value-row">
            {columns.map((column, index) => ( <td key={index} className="value-column">{this.renderCell(item, column)}</td>))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
