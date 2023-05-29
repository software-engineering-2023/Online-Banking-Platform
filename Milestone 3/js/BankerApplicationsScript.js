
$(document).ready(function() {
    // alert("Welcome to the Credit Card Application Page");
    // loadData();
    $('#cardAppNo').text(AppsNocard);
    $('#loanAppNo').text(AppsNoloan);
    $('#replacesNo').text(replacementsAppNo);

    for (var i = 0; i < clientIDs.length; ++i) {
        var row = $("#row" + i);
        row.css('display', showrow[i] ? 'table-row' : 'none');
        var cells = row.find("td");

        // Access the specific <td> element you want to edit (e.g., the second <td>)
        // Modify the content of the <td> element
        $(cells[0]).text(clientIDs[i]);
        $(cells[1]).text(dates[i]);
        $(cells[2]).text(cardTypes[i]);
    }
});

$(document).ready(function() {
    // alert("Welcome to the Loan Application Page");
    // loadData();
    $('#cardAppNo').text(AppsNocard);
    $('#loanAppNo').text(AppsNoloan);
    $('#replacesNo').text(replacementsAppNo);

    for (var i = 0; i < clientIDs.length; ++i) {
        var row = $("#lrow" + i);
        row.css('display', showrow[i] ? 'table-row' : 'none');
        var cells = row.find("td");

        // Access the specific <td> element you want to edit (e.g., the second <td>)
        // Modify the content of the <td> element
        $(cells[0]).text(clientIDs[i]);
        $(cells[1]).text(dates[i]);
        $(cells[2]).text(loanTypes[i]);
    }
});



$(document).ready(function(){
    $(".acceptance").click(function(){
        var apID = +document.getElementById('appID').textContent;

        var status = $(this).text();
        alert("Application Of ID '"+ apID + "' has been " + status + "ed");

        $("#row"+apID).hide();
        showrow[apID] = false;
        AppsNocard--;
        $('#cardAppNo').text(AppsNocard);
        $('#maincardNo').text(AppsNocard);

        // saveData();
        // alert(showrow);
    });
});

$(document).ready(function(){
    $(".lacceptance").click(function(){
        var lapID = +document.getElementById('lappID').textContent;

        var lstatus = $(this).text();
        alert("Application Of ID '"+ lapID + "' has been " + lstatus + "ed");

        $("#lrow"+lapID).hide();
        showrow[lapID] = false;
        AppsNoloan--;
        $('#loanAppNo').text(AppsNoloan);
        $('#mainloanNo').text(AppsNoloan);

        // saveData();
        // alert(showrow);
    });
});


if(document.getElementById('applicationModal'))
document.getElementById('applicationModal').addEventListener('show.bs.modal', function (event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        var id = +button.id.substring(1);


        // Get the application details from the button's data attributes or other sources
        var empID = clientIDs[id];
        var appName = (empID == 4763380)?"AbuElKheir": "Andrew Mostafa Tate"; // Example application name
        var appEmploymentStatus = (empID == 4763380)? "Full-Time": "Unemployed"; // Example employment status
        var appDate = dates[id];
        var cardType = cardTypes[id];
        
        // Populate the modal with the application details
        document.getElementById('appName').textContent = appName;
        document.getElementById('appEmploymentStatus').textContent = appEmploymentStatus;
        document.getElementById('appDate').textContent = appDate;
        document.getElementById('empID').textContent = empID;
        document.getElementById('appCardType').textContent = cardType;
        document.getElementById('appID').textContent = id;
        if(appEmploymentStatus == "Unemployed")
            $("#pdfbutton").prop("disabled", true);
        else
            $("#pdfbutton").prop("disabled", false);
        // Add more code to populate other application details
});

if(document.getElementById('applicationModal2'))
document.getElementById('applicationModal2').addEventListener('show.bs.modal', function (event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        var lid = +button.id.substring(2);


        // Get the application details from the button's data attributes or other sources
        var lempID = clientIDs[lid];
        var lappName = (lempID == 4763380)?"AbuElKheir": "Andrew Mostafa Tate"; // Example application name
        var lappEmploymentStatus = (lempID == 4763380)? "Full-Time": "Part-Time"; // Example employment status
        var lappDate = dates[lid];
        var loanType = loanTypes[lid];
        var loanAm = loanAmounts[lid];
        
        // Populate the modal with the application details
        document.getElementById('lappName').textContent = lappName;
        document.getElementById('lappEmploymentStatus').textContent = lappEmploymentStatus;
        document.getElementById('lappDate').textContent = lappDate;
        document.getElementById('lempID').textContent = lempID;
        document.getElementById('apploanType').textContent = loanType;
        document.getElementById('lappID').textContent = lid;
        document.getElementById('apploanAmount').textContent = loanAm;
        if(lappEmploymentStatus == "Unemployed")
            $("#pdfbutton").prop("disabled", true);
        else
            $("#pdfbutton").prop("disabled", false);
        // Add more code to populate other application details
});
function openPDF() {
    window.open('assets/Employment.pdf', '_blank');
  }


// function acceptOrRejectApp(rowid){
    
//     //hide the row
//     //alert("Application Accepted" + "  row" + rowid);
//     // console.log('row0');
//     var row = document.getElementById("anate3bt");
//     row.textContent = "Offff b2a";
//     // Hide the row by setting its display property to 'none'
//     row.style.display = 'none';
// }
// function test() {
//     var lst = document.getElementsByClassName("myrow");
//     console.log(lst.length);
//     for(var i = 0; i < lst.length; ++i) {
//         lst[i].style.display = 'none';
//     }
// }