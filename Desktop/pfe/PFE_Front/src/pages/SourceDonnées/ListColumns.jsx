import React, { useEffect, useState } from 'react';
import FormatDuRapport from './FormatDuRapport';
import generateReportfromSelectColumns from '../../services/generateReportfromSelectColumns';

const ListColumns = ({ columns,tableName,DataBaseConnexion }) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [reportFormat, setSelectedFormat] = useState(false);


  const handleCheckboxChange = (index) => {
    const columnName = columns[index];
    const newSelectedColumns = selectedColumns.includes(columnName)
      ? selectedColumns.filter((col) => col !== columnName)
      : [...selectedColumns, columnName];
    setSelectedColumns(newSelectedColumns);
  };

  const handleGenerateReport = () => {
    console.log(selectedColumns);
    generateReportfromSelectColumns(reportFormat,DataBaseConnexion,selectedColumns,tableName)
  };

  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark mt-4" style={{ width: '300px' }}>
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h1 className="font-medium mb-4" style={{ color: 'rgb(65, 105, 225)' }}>Liste des colonnes :</h1>
          <div>
            {columns.map((name, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`checkbox_${name}`}
                  name={name}
                  value={name}
                  checked={selectedColumns.includes(name)}
                  className="mr-2 h-6 w-6 rounded border"
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={`checkbox_${name}`}
                  className="flex items-center cursor-pointer select-none"
                  style={{ width: 'calc(100% - 28px)' }} // Adjust width here
                >
                  <div className="relative mr-2">
                    <div>
                      {/* You can add checkbox checked indication here if needed */}
                    </div>
                  </div>
                  {name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 mr-30 mt-4 mb-4">
      <button className="inline-flex items-center justify-center rounded-full bg-black py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4" onClick={() => setShowModal(true)}>
         Choisir le format du rapport
      </button>
    </div>
    {showModal ? (
      <FormatDuRapport setShowModal={setShowModal} setSelectedFormat={setSelectedFormat} générerRapport={handleGenerateReport} />
    ) : null}
    </div>
  );
};

export default ListColumns;
