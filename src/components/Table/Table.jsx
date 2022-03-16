import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditModal from "./EditModal/EditModal";

const Table = ({ emplloyee, emplloyeeData, perPageView, page }) => {
  //state for edit emplloyee
  const [editEmplloyee, setEditEmplloyee] = useState({});
  // state for close modal
  const [closeBtn, setCloseBtn] = useState("modal");
  // state for order of emplloyees to show in tabele
  const [order, setOrder] = useState({
    name: true,
    age: true,
    position: true,
    office: true,
    startDate: true,
  });

  // function for set order of emplloyees
  const sortData = (thName) => {
    if (thName === "name" || thName === "position" || thName === "office") {
      emplloyeeData([
        ...emplloyee.sort((a, b) =>
          order.thName === true
            ? a[thName].toLowerCase() > b[thName].toLowerCase()
              ? 1
              : -1
            : a[thName].toLowerCase() < b[thName].toLowerCase()
            ? 1
            : -1
        ),
      ]);
      setOrder({ ...order, thName: !order.thName });
    } else if (thName === "age") {
      emplloyeeData([
        ...emplloyee.sort((a, b) =>
          order.age === true
            ? parseInt(a[thName]) - parseInt(b[thName])
            : parseInt(b[thName]) - parseInt(a[thName])
        ),
      ]);
      setOrder({ ...order, age: !order.age });
    } else if (thName === "startDate") {
      emplloyeeData([
        ...emplloyee.sort((a, b) => {
          let first = new Date(a[thName]).getTime();
          let second = new Date(b[thName]).getTime();
          return order.startDate === true ? first - second : second - first;
        }),
      ]);
      setOrder({ ...order, startDate: !order.startDate });
    } else if (thName === "salary") {
      emplloyeeData([
        ...emplloyee.sort((a, b) =>
          order.salary === true
            ? parseInt(a.salary.slice(1).split(",").join("")) -
              parseInt(b.salary.slice(1).split(",").join(""))
            : parseInt(b.salary.slice(1).split(",").join("")) -
              parseInt(a.salary.slice(1).split(",").join(""))
        ),
      ]);
      setOrder({ ...order, salary: !order.salary });
    }
  };

  // function for close edit modal
  const closeEditModal = (x) => setCloseBtn(x);
  // function for open edit modal
  const openEditModal = (obj) => {
    setCloseBtn("modal");
    setEditEmplloyee(obj);
  };

  return emplloyee.length > 0 ? (
    <>
      <table>
        <thead>
          <tr>
            {Object.keys(emplloyee[0]).map((thData) => (
              <th key={uuidv4()} onClick={() => sortData(thData)}>
                {thData.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {emplloyee
            .slice((page - 1) * perPageView, page * perPageView)
            .map((obj) => (
              <tr key={uuidv4()}>
                {Object.values(obj).map((data) => (
                  <td key={uuidv4()}>{data}</td>
                ))}
                <td>
                  <button
                    onClick={() =>
                      emplloyeeData(
                        emplloyee.filter((data) => data.number !== obj.number)
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => openEditModal(obj)}>Edit</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <EditModal
        editEmplloyee={editEmplloyee}
        emplloyee={emplloyee}
        closeBtn={closeBtn}
        closeEditModal={closeEditModal}
        emplloyeeData={emplloyeeData}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default Table;
