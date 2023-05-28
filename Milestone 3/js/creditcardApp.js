document.getElementById('applicationModal').addEventListener('show.bs.modal', function (event) {
    // Get the button that triggered the modal
    var button = event.relatedTarget;
    var id = +button.id.substring(1);


    // Get the application details from the button's data attributes or other sources
    var appName = (clientIDs[id] == 4763380)?"AbuElKheir": "Andrew Mostafa Tate"; // Example application name
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

// document.addEventListener("DOMContentLoaded", function() {
//     var row = document.getElementById('rowToHide');
//     row.style.display = 'none';
//   });
  
$(document).ready(function(){
    $("button").click(function(){
alert("The button was clicked." + clientIDs[0]);
        var buttonId = $(this).attr("id");
        // alert("Clicked button ID: " + buttonId);
            $("#aa").hide();
    });
  });



function openPDF() {
    window.open('assets/Employment.pdf', '_blank');
  }


function acceptOrRejectApp(rowid){
    
    //hide the row
    //alert("Application Accepted" + "  row" + rowid);
    console.log('row0');
    var row = document.getElementById("anate3bt");
    row.textContent = "Offff b2a";
    // Hide the row by setting its display property to 'none'
    row.style.display = 'none';
}
function test() {
    var lst = document.getElementsByClassName("myrow");
    console.log(lst.length);
    for(var i = 0; i < lst.length; ++i) {
        lst[i].style.display = 'none';
    }
}