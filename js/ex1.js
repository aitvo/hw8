// get data and check for errors
// async because fetching data takes time
async function fetchPaintings() {
  try { // try and catch for handling errors
      const response = await fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json");
      const paintings = await response.json();
      populateTable(paintings); // add the data into table if no error
  } catch (error) {
      console.error("Error fetching paintings:", error);
  }
}

// takes paintings and add them to table
  function populateTable(paintings) { // an array of onjects -> loops and creates rows

    const table = document.getElementById("paintings"); // find html element with ID paintings
    paintings.forEach(painting => { // go through each painting

        const row = document.createElement("tr");

        const nameCell = document.createElement("td"); // add cells
        nameCell.textContent = painting.name;
        row.appendChild(nameCell);

        const yearCell = document.createElement("td"); // add cells
        yearCell.textContent = painting.year;
        row.appendChild(yearCell);

        const artistCell = document.createElement("td"); // add cells
        artistCell.textContent = painting.artist;
        row.appendChild(artistCell);

        table.appendChild(row);
    });
}
// starts process
fetchPaintings();