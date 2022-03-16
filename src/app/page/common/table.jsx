import React, { Component } from "react";
import _ from "lodash";
import TableBody from "./tableBody";
import TableHead from "./tableHead";
import "../common/styles/table.scss";

class Table extends Component {
  render() {
    const { columns, data, heading } = this.props;

    return (
      <section className="table-section">
        <h1 className="table-heading">{`Danh Sách ${heading}`} </h1>
        <div className="table-container">
          <div className="table-wrapper">
            <table className="table">
              <TableHead columns={columns} />
              <TableBody columns={columns} data={data} />
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default Table;
