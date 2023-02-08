// import data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

//Build the table
function buildTable(data) {
    //Clear out any data
    tbody.html("");

    //Loop through each object in the data & append a row and cells
    //for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}