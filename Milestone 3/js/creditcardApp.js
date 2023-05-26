document.getElementById('applicationModal').addEventListener('show.bs.modal', function (event) {
    // Get the button that triggered the modal
    var button = event.relatedTarget;

    // Get the application details from the button's data attributes or other sources
    var appName = "John Doe"; // Example application name
    var appEmploymentStatus = "Employed"; // Example employment status
    var appDate = '2023/10/7 23:10';
    var empID = 4763380;

    // Populate the modal with the application details
    document.getElementById('appName').textContent = appName;
    document.getElementById('appEmploymentStatus').textContent = appEmploymentStatus;
    document.getElementById('appDate').textContent = appDate;
    document.getElementById('empID').textContent = empID;
    // Add more code to populate other application details
});


function openPDF() {
    window.open('assets/Employment.pdf', '_blank');
  }