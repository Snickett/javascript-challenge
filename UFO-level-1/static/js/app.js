// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

//   var filteredData = tableData.filter(input1 => input1.datetime.toLowerCase() === inputValue.toLowerCase());
  var filteredData = tableData.filter(input1 => input1.datetime  == inputValue);

  console.log(filteredData);


// NEW STUFF //

  function generateTableHead(table, data2) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data2) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTable(table, data2) {
    for (let element of data2) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data2 = Object.keys(filteredData[0]);
  generateTableHead(table, data2);
  generateTable(table, filteredData);
});