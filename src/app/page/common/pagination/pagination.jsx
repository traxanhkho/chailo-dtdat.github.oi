import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import "./pagination.scss";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={
            page === currentPage ? "pagination-item active" : "pagination-item"
          }
          onClick={() => onPageChange(page)}
        >
          <a className="pagination-link">{page}</a>
        </li>
      ))}
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
