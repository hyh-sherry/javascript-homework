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

// Write JavaScript code that will listen for events and search through o find rows that match user input.
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {
  var elementDate = document.getElementById("datetime");
  var selectedDate = elementDate.options[elementDate.selectedIndex].text;
  console.log(selectedDate);

  var inputCity = d3.select("#city").property("value");
  console.log(inputCity);

  var inputState = d3.select("#state").property("value");
  console.log(inputState);

  var elementCountry = document.getElementById("country");
  var selectedCountry =
    elementCountry.options[elementCountry.selectedIndex].text;
  console.log(selectedCountry);

  var inputShape = d3.select("#shape").property("value");
  console.log(inputShape);

  var filteredObs = tableData;

  if (selectedDate) {
    filteredObs = filteredObs.filter(
      (observation) => observation.datetime === selectedDate
    );
  }

  if (inputCity) {
    filteredObs = filteredObs.filter(
      (observation) => observation.city === inputCity
    );
  }

  if (inputState) {
    filteredObs = filteredObs.filter(
      (observation) => observation.state === inputState
    );
  }

  if (selectedCountry) {
    filteredObs = filteredObs.filter(
      (observation) => observation.country === selectedCountry
    );
  }

  if (selectedCountry) {
    filteredObs = filteredObs.filter(
      (observation) => observation.country === selectedCountry
    );
  }

  if (inputShape) {
    filteredObs = filteredObs.filter(
      (observation) => observation.shape === inputShape
    );
  }
  //   var filteredObs = tableData.filter(
  //     (observation) =>
  //       observation.datetime === selectedDate &&
  //       observation.city === inputCity &&
  //       observation.state === inputState &&
  //       observation.country === selectedCountry &&
  //       observation.shape === inputShape
  //   );

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
