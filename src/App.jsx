import React, { useEffect, useState } from "react";
import "./App.css";
import emplloyeesData from "./employees.json";
import Modal from "./components/Modal/Modal";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  // state for emplloyees data
  const [emplloyee, setEmplloyee] = useState([]);
  //state for open and close modal
  const [openModal, SetOpenModal] = useState("modalNon");
  // state for view emplloyees per page
  const [perPageView, setPerPageView] = useState(5);
  // state for current page number
  const [page, setPage] = useState(1);

  // initial fetch data and add propery,number
  useEffect(() => {
    setTimeout(
      () =>
        setEmplloyee(
          emplloyeesData.map((data, i) => ({ number: i + 1, ...data }))
        ),
      100
    );
  }, []);

  // function for close modal
  const closeModal = (style) => SetOpenModal(style);
  // function for set state emplloyee
  const emplloyeeData = (data) => setEmplloyee(data);
  // function for set emplloyees view per page
  const viewPerPage = (n) => setPerPageView(n);
  // function for change page
  const prevNextPage = (p) => setPage(p);
  // function for reset table
  const resetTable = () => {
    setEmplloyee(emplloyeesData.map((data, i) => ({ number: i + 1, ...data })));
    setPage(1);
  };
  return (
    <div>
      <h1>Emplloyees Data</h1>
      <button className="modalBtn" onClick={() => SetOpenModal("modal")}>
        Add new emplloyee
      </button>
      <button className="modalBtn" onClick={() => resetTable()}>
        Reset filter
      </button>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        emplloyeeData={emplloyeeData}
        emplloyee={emplloyee}
      />
      <Table
        emplloyee={emplloyee}
        emplloyeeData={emplloyeeData}
        perPageView={perPageView}
        page={page}
      />
      <Pagination
        viewPerPage={viewPerPage}
        emplloyee={emplloyee}
        perPageView={perPageView}
        page={page}
        prevNextPage={prevNextPage}
      />
    </div>
  );
};

export default App;
