document.getElementById('sampleForm').addEventListener('submit', function(event) {
  event.preventDefault(); // form

  const tableBody = document.getElementById('dataTable').querySelector('tbody');
  tableBody.innerHTML = '';

  //  FormData object
  const formData = new FormData(this);

  // Populate table
  formData.forEach((value, key) => {
    const row = document.createElement('tr');
    const keyCell = document.createElement('td');
    const valueCell = document.createElement('td');

    keyCell.textContent = key;
    valueCell.textContent = value;

    row.appendChild(keyCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  });
});
