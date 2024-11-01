// data
const travelInfo = {
  name: "Ai Vo", // name and countries
  countries: [
      { name: "Vietnam", year: 2024 },
      { name: "Singapore", year: 2023 },
      { name: "Thailand", year: 2019 },
      { name: "Korea", year: 2018 }
  ]
};

// Send data to server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST", // HTTP method
  headers: {
    "Content-Type": "application/json" // Set to JSON
  },
  body: JSON.stringify(travelInfo) // include body for travel info

})
.then(response => 
  response.json().then(data => {
    console.log(`Your name is ${travelInfo.name.split(" ")[0]} and you visited ${travelInfo.countries.length} countries. Keep traveling!`); 
  }).catch(error => {
    console.error("Error parsing JSON:", error); 
  })
)
.catch(error => {
  console.error("Error:", error);
});

// idk why it's not working :')