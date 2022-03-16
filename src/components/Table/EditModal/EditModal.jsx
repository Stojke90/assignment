import React, { useEffect, useState } from "react";

const EditModal = ({
  editEmplloyee,
  emplloyee,
  closeBtn,
  closeEditModal,
  emplloyeeData,
}) => {
  // state for edited emlloyee
  const [editedEmplloyee, setEditedEmplloyee] = useState({});
  // initial fetch and find emplloyee by some ID,this case number
  useEffect(() => {
    Object.keys(editEmplloyee).length > 0 &&
      setEditedEmplloyee(
        emplloyee.find((data) => data.number === editEmplloyee.number)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editEmplloyee]);

  // function for save edit emplloyee and close modal
  const saveEditEmplloyee = (editedEmplloyee) => {
    let handleEditEmplloyee = emplloyee.find(
      (data) => data.number === editedEmplloyee.number
    );

    handleEditEmplloyee.name = editedEmplloyee.name;
    handleEditEmplloyee.position = editedEmplloyee.position;
    handleEditEmplloyee.office = editedEmplloyee.office;
    handleEditEmplloyee.age = editedEmplloyee.age;
    handleEditEmplloyee.startDate = editedEmplloyee.startDate;
    handleEditEmplloyee.salary = editedEmplloyee.salary;

    closeEditModal("modalNon");
  };

  return (
    Object.keys(editedEmplloyee).length > 0 && (
      <div className={closeBtn}>
        <h2>Edit emplloyee</h2>
        <button className="closeBtn" onClick={() => closeEditModal("modalNon")}>
          X
        </button>
        <input
          type="text"
          placeholder="name"
          value={editedEmplloyee.name}
          onChange={(e) =>
            setEditedEmplloyee({ ...editedEmplloyee, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="position"
          value={editedEmplloyee.position}
          onChange={(e) =>
            setEditedEmplloyee({ ...editedEmplloyee, position: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="office"
          value={editedEmplloyee.office}
          onChange={(e) =>
            setEditedEmplloyee({ ...editedEmplloyee, office: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="age"
          value={editedEmplloyee.age}
          onChange={(e) =>
            setEditedEmplloyee({ ...editedEmplloyee, age: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="startDate"
          value={editedEmplloyee.startDate}
          onChange={(e) =>
            setEditedEmplloyee({
              ...editedEmplloyee,
              startDate: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="salary"
          value={editedEmplloyee.salary}
          onChange={(e) =>
            setEditedEmplloyee({ ...editedEmplloyee, salary: e.target.value })
          }
        />
        <button
          className="saveBtn"
          onClick={() => saveEditEmplloyee(editedEmplloyee)}
        >
          Save
        </button>
      </div>
    )
  );
};

export default EditModal;
