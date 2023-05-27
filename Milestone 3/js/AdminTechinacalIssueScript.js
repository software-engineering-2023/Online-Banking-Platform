const tableBody = document.getElementById('technicalIssuestableBody');

// Sample data for table rows
const rowsData = [
  {
    id: '154394874163945',
    description: 'Issue 1',
    username: 'john_doe',
    date: '2022-05-27 10:30:00',
    status: 'solved',
  },
  {
    id: '154394874163946',
    description: 'Issue 2',
    username: 'jane_doe',
    date: '2022-05-28 15:45:00',
    status: 'pending',
  },
  {
    id: '154394874163947',
    description: 'Issue 3',
    username: 'jane_doe',
    date: '2022-05-29 15:55:00',
    status: 'pending',
  }
];

const myAlert = Swal.mixin();


// Generate table rows
rowsData.forEach(report => {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const usernameCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const statusCell = document.createElement('td');
    const checkbox = document.createElement('input');

    idCell.textContent = report.id;
    descriptionCell.textContent = report.description;
    usernameCell.textContent = report.username;
    dateCell.textContent = report.date;
    checkbox.type = 'checkbox';
    statusCell.textContent = `solved: `;
    statusCell.appendChild(checkbox);

    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            showDeleteAlert(report);
        } 
    });    

    row.appendChild(idCell);
    row.appendChild(descriptionCell);
    row.appendChild(usernameCell,);
    row.appendChild(dateCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
});

function showDeleteAlert(report) {
    myAlert.fire({
        text: `This technical issue is now done. Do you want to delete it ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        dangerMode: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the announcement from the array
        let index = rowsData.indexOf(report);
        rowsData.splice(index, 1);
        
        // Remove the announcement item from the container
        tableBody.removeChild(tableBody.childNodes[index]);
        toastr.success("The technical issue report has been deleted sucessfully");
      }
    });
  }