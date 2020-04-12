// from data.js
var tableData = data;

// Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("#ufo-table>tbody");

tableData.forEach((observation) => {
  var row = tbody.append("tr");
  Object.entries(observation).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Write JavaScript code that will listen for events and search through obervations to find rows that match user input.
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {
  var inputDate = d3.select("#datetime").property("value");
  var filteredObs = tableData.filter(
    (observation) => observation.datetime === inputDate
  );

  // check the filtered observations
  console.log(filteredObs);

  // rewrite the table content
  tbody.html("");

  filteredObs.forEach((observation) => {
    var row = tbody.append("tr");
    Object.entries(observation).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
