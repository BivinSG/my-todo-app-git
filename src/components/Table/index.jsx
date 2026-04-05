import React from "react";
import Input from "../../Input";

const Table = ({ tableColumns, data,toggleModal }) => {
  return (
    <>
      <div className="list-input-container">
        <button onClick={toggleModal}>
          <i className="fa-solid fa-plus add-icon"></i>
        </button>
        <div className="list-search">
          <Input
            type="text"
            name="search"
            // value={state?.search}
            // onChange={handleSearch}
            placeholder="Search..."
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {tableColumns.map((col) => (
              <th key={col.accessor}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((student, index) => (
            <tr key={index}>
              {tableColumns.map((col, index) => (
                <td key={index}>{student[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
