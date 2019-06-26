
// UFO Sightings - Javascript Homework - Katelyn Burke

// Reference the table body, create variables
var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");
var durationInput = document.querySelector("#durationMinutes");
var commentsInput = document.querySelector("#comments");
var searchButn = document.querySelector("#filter-btn");
var searchButnCity = document.querySelector("#filter-btn-city")
var searchButnState = document.querySelector("#filter-btn-state")
var searchButnCountry = document.querySelector("#filter-btn-country")
var searchButnShape = document.querySelector("#filter-btn-shape")

// Loop through the data and append it to the table
// Interpolate into html
// Inner HTML

data.forEach(function(ufoInfo) {
  console.log(ufoInfo);
  var row = tbody.innerHTML += `
  <tr>
      <td>${ufoInfo.datetime}</td>
      <td>${ufoInfo.city}</td>
      <td>${ufoInfo.state}</td>
      <td>${ufoInfo.country}</td>
      <td>${ufoInfo.shape}</td>
      <td>${ufoInfo.durationMinutes}</td>
      <td>${ufoInfo.comments}</td>
  </tr>
  `;
});

// Add an event listener to the searchButton that will search through the date/time column
// buttonClicked function
let filteredDate;

const filterDataByDate = function (date) {
  tbody.innerHTML = '';
  data.forEach(function(ufoInfo) {
    if (ufoInfo.datetime === date) {
      var row = tbody.innerHTML += `
      <tr>
          <td>${ufoInfo.datetime}</td>
          <td>${ufoInfo.city}</td>
          <td>${ufoInfo.state}</td>
          <td>${ufoInfo.country}</td>
          <td>${ufoInfo.shape}</td>
          <td>${ufoInfo.durationMinutes}</td>
          <td>${ufoInfo.comments}</td>
      </tr>
      `;
    }
  });
}

const buttonClicked = function (event) {
  event.preventDefault();
  console.log('event', event);
  filteredDate = dateInput.value.trim();
  console.log('filteredDate', filteredDate);
  filterDataByDate(filteredDate);
  return;
}

searchButn.addEventListener("click", buttonClicked);


// Filter data by other criteria 

// Filter by City

let filteredCity;

const filterDataByCity = function (city1) {
  tbody.innerHTML = '';
  data.forEach(function(ufoInfo) {
    if (ufoInfo.city === city1) {
      var row = tbody.innerHTML += `
      <tr>
          <td>${ufoInfo.datetime}</td>
          <td>${ufoInfo.city}</td>
          <td>${ufoInfo.state}</td>
          <td>${ufoInfo.country}</td>
          <td>${ufoInfo.shape}</td>
          <td>${ufoInfo.durationMinutes}</td>
          <td>${ufoInfo.comments}</td>
      </tr>
      `;
    }
  });
}

const buttonClicked2 = function (event) {
  event.preventDefault();
  console.log('event', event);
  filteredCity = cityInput.value.trim().toLowerCase();
  console.log('filteredCity', filteredCity);
  filterDataByCity(filteredCity);
  return;
}

searchButnCity.addEventListener("click", buttonClicked2);



// Filter by State

let filteredState;

const filterDataByState = function (state1) {
  tbody.innerHTML = '';
  data.forEach(function(ufoInfo) {
    if (ufoInfo.state === state1) {
      var row = tbody.innerHTML += `
      <tr>
          <td>${ufoInfo.datetime}</td>
          <td>${ufoInfo.city}</td>
          <td>${ufoInfo.state}</td>
          <td>${ufoInfo.country}</td>
          <td>${ufoInfo.shape}</td>
          <td>${ufoInfo.durationMinutes}</td>
          <td>${ufoInfo.comments}</td>
      </tr>
      `;
    }
  });
}

const buttonClicked3 = function (event) {
  event.preventDefault();
  console.log('event', event);
  filteredState = stateInput.value.trim().toLowerCase();
  console.log('filteredState', filteredState);
  filterDataByState(filteredState);
  return;
}

searchButnState.addEventListener("click", buttonClicked3);



// Filter by Country 

let filteredCountry;

const filterDataByCountry = function (country1) {
  tbody.innerHTML = '';
  data.forEach(function(ufoInfo) {
    if (ufoInfo.country === country1) {
      var row = tbody.innerHTML += `
      <tr>
          <td>${ufoInfo.datetime}</td>
          <td>${ufoInfo.city}</td>
          <td>${ufoInfo.state}</td>
          <td>${ufoInfo.country}</td>
          <td>${ufoInfo.shape}</td>
          <td>${ufoInfo.durationMinutes}</td>
          <td>${ufoInfo.comments}</td>
      </tr>
      `;
    }
  });
}

const buttonClicked4 = function (event) {
  event.preventDefault();
  console.log('event', event);
  filteredCountry = countryInput.value.trim().toLowerCase();
  console.log('filteredCountry', filteredCountry);
  filterDataByCountry(filteredCountry);
  return;
}

searchButnCountry.addEventListener("click", buttonClicked4);


// Filter by Shape

let filteredShape;

const filterDataByShape = function (shape1) {
  tbody.innerHTML = '';
  data.forEach(function(ufoInfo) {
    if (ufoInfo.shape === shape1) {
      var row = tbody.innerHTML += `
      <tr>
          <td>${ufoInfo.datetime}</td>
          <td>${ufoInfo.city}</td>
          <td>${ufoInfo.state}</td>
          <td>${ufoInfo.country}</td>
          <td>${ufoInfo.shape}</td>
          <td>${ufoInfo.durationMinutes}</td>
          <td>${ufoInfo.comments}</td>
      </tr>
      `;
    }
  });
}

const buttonClicked5 = function (event) {
  event.preventDefault();
  console.log('event', event);
  filteredShape = shapeInput.value.trim().toLowerCase();
  console.log('filteredShape', filteredShape);
  filterDataByShape(filteredShape);
  return;
}

searchButnShape.addEventListener("click", buttonClicked5);
