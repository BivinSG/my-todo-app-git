import React, { useEffect, useState } from "react";
import Input from "../../Input";

const Table = ({ tableColumns, data, onAddClick }) => {
  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const ftData = data.filter((row) =>
      tableColumns.some((col) => {
        const value = row[col.accessor];
        return (
          value && value.toString().toLowerCase().includes(search.toLowerCase())
        );
      }),
    );
    setFilteredData(ftData);
  }, [data, search, tableColumns]);

  return (
    <>
      <div className="list-input-container">
        <button onClick={onAddClick}>
          <i className="fa-solid fa-plus add-icon"></i>
        </button>
        <div className="list-search">
          {/* <Input
            type="text"
            name="search"
            // value={state?.search}
            onChange={handleSearch}
            placeholder="Search..."
          /> */}
          <input type="text" placeholder="Search Here..." />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {tableColumns?.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((student, index) => (
              <tr key={index}>
                {tableColumns.map((col, index) => (
                  <td key={index}>
                    {col?.render ? col?.render(student) : student[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableColumns.length}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
