import React from "react";

const Pagination = ({
  viewPerPage,
  emplloyee,
  perPageView,
  page,
  prevNextPage,
}) => {
  return (
    <div className="paginations">
      <div className="leftSide">
        <label htmlFor="cars">Emplloyees per page:</label>

        <select id="emplloyees" onChange={(e) => viewPerPage(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="rightSide">
        <button
          disabled={page === 1}
          onClick={() => prevNextPage((prevState) => prevState - 1)}
        >
          Previous page
        </button>
        <p>
          {page} / {Math.ceil(emplloyee.length / perPageView)}
        </p>
        <button
          disabled={page === Math.ceil(emplloyee.length / perPageView)}
          onClick={() => prevNextPage((prevState) => prevState + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
