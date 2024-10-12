import React, { useEffect } from 'react';

const DetailsTableView = ({ tableData, tableColumnNames }) => {
  useEffect(() => {
    console.log("Attributes11", tableColumnNames);
    console.log("Table Data", tableData);
  }, [tableData, tableColumnNames]);

  return (
    <div className="h-1/4 bg-gray-800 w-full overflow-hidden relative">
      <table className="text-white w-full border-collapse">
        <thead className="bg-gray-900 sticky top-0 z-10">
          <tr>
            {tableColumnNames.map((column, index) => (
              <th key={index} className="border border-white p-2">{column.name}</th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="overflow-auto h-full">
        <table className="text-white w-full border-collapse">
          <tbody>
            {tableData.map((feature, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                {tableColumnNames.map((column, colIndex) => (
                  <td key={colIndex} className="border text-black border p-2">
                    {feature.values_[column.name] !== undefined ? feature.values_[column.name] : 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <h1>table is here</h1>
  );
};

export default DetailsTableView;
