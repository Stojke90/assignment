import React, { useState } from "react";

const Modal = ({ openModal, closeModal, emplloyeeData, emplloyee }) => {
  // initial data for emlloyess
  const initalValue = {
    name: "",
    position: "",
    office: "",
    age: "",
    startDate: "",
    salary: "",
  };
  // state for new emplloyees
  const [newEmplloyee, setNewEmplloyee] = useState(initalValue);

  // function for save new emplloyee,close modal and reset form
  const saveCLoseModal = () => {
    emplloyeeData([
      ...emplloyee,
      {
        number: emplloyee.length + 1,
        ...newEmplloyee,
        salary: "$" + newEmplloyee.salary,
      },
    ]);
    setNewEmplloyee(initalValue);
    closeModal("modalNon");
  };
  // function for exit modal and reset form
  const exitModal = () => {
    closeModal("modalNon");
    setNewEmplloyee(initalValue);
  };
  // check is object values have values,function for button submit
  const empthyArr = !Object.values(newEmplloyee).every((x) => x.length > 0);
  return (
    <div className={openModal}>
      <h2>Create new emplloyee</h2>
      <button className="closeBtn" onClick={() => exitModal()}>
        X
      </button>
      <input
        type="text"
        value={newEmplloyee.name}
        placeholder="name"
        onChange={(e) =>
          setNewEmplloyee({ ...newEmplloyee, name: e.target.value })
        }
      />
      <input
        type="text"
        value={newEmplloyee.position}
        placeholder="position"
        onChange={(e) =>
          setNewEmplloyee({ ...newEmplloyee, position: e.target.value })
        }
      />
      <input
        type="text"
        value={newEmplloyee.office}
        placeholder="office"
        onChange={(e) =>
          setNewEmplloyee({ ...newEmplloyee, office: e.target.value })
        }
      />
      <input
        type="text"
        value={newEmplloyee.age}
        placeholder="age"
        onChange={(e) =>
          setNewEmplloyee({ ...newEmplloyee, age: e.target.value })
        }
      />
      <input
        type="text"
        value={newEmplloyee.startDate}
        placeholder="startDate"
        onChange={(e) =>
          setNewEmplloyee({ ...newEmplloyee, startDate: e.target.value })
        }
      />
      <input
        type="text"
        value={newEmplloyee.salary}
        placeholder="salary"
        onChange={(e) =>
          setNewEmplloyee({ ...newEmplloyee, salary: e.target.value })
        }
      />
      <button
        disabled={empthyArr}
        className="saveBtn"
        onClick={() => saveCLoseModal()}
      >
        Create
      </button>
    </div>
  );
};

export default Modal;
