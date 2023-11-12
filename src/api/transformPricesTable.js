const extractColumnByValue = (html, value, table) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  const headerRow = tempElement?.querySelector("table tr");

  if (headerRow) {
    const headerCells = headerRow.querySelectorAll("td, th");
    const headers = Array.from(headerCells).map((cell) => cell.textContent);

    const tableData = {};
    headers.forEach((header) => {
      tableData[header] = [];
    });

    const dataRows = Array.from(tempElement.querySelectorAll("table tr")).slice(
      1
    );

    headers.forEach((header, columnIndex) => {
      dataRows.forEach((row) => {
        const cell = row.children[columnIndex];
        if (cell) {
          tableData[header].push(cell.textContent);
        }
      });
    });
    const extractedColumn = tableData[value];

    const jsxTable = (
      <table>
        <tbody>
          {extractedColumn.map((value, index) => (
            <tr key={index}>
              <td>
                <div>{value}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    if (table === true) {
      return jsxTable;
    } else {
      return extractedColumn;
    }
  } else {
    return;
  }
};

export default extractColumnByValue;
