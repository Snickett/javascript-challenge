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

  //  array?
  var datetime = filteredData.map(input1 => input1.datetime);
  var state = filteredData.map(input1 => input1.state);


  // console.log(datetime);
  // console.log(filteredData.length);

  // store values?
  var city = filteredData.city;
  var state = filteredData.state;
  var country = filteredData.country;
  var shape = filteredData.shape;
  var duration = filteredData.duration;
  var commento = filteredData.comments;
  var dateo = filteredData.map(row => row[0]);

  console.log(datetime)
  console.log(state)

// d3.json(filteredData).then(function(data) {
//     var dateo = data.dataset.data.map(row => row[0]);
//     var city = data.dataset.data.map(row => row[1]);
//     var state = data.dataset.data.map(row => row[2]);
//     var country = data.dataset.data.map(row => row[3]);
//     var shape = data.dataset.data.map(row => row[4]);
//     var duration = data.dataset.data.map(row => row[5]);
//     var commento = data.dataset.data.map(row => row[6]);
//     buildTable(dateo, city, state, country, shape, duration, commento);
  // });

  console.log(commento);

  // remove any data from the table
  // output.html("");

// });

// function buildTable(datetime, city, state, country, shape, duration,commento) {
//     var table = d3.select("#ufo-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < filteredData.length; i++) {
//       trow = tbody.append("tr");
//       trow.append("td").text(datetime[i]);
//     }
//   };



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