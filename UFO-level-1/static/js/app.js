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

  // store values?
  var city = data.city;
  var state = data.state;
  var country = data.country;
  var shape = data.shape;
  var duration = data.duration;
  var commento = data.comments;

  // Then, select the table
  var output = d3.select(".output>tbody>tr")

  // remove any data from the table
  output.html("");

  // append stats to the table
//   output.append("td").text(datetime);
  output.append("td").text("dora")
  output.append("td").text(city);
  output.append("td").text(state);
  output.append("td").text(country);
  output.append("td").text(shape);
  output.append("td").text(duration);
  output.append("td").text(commento);
});