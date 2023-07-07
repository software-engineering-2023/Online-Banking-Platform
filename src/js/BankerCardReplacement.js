
$(document).ready(function() {
    // alert("Welcome to the Credit Card Replacements Page");
    // loadData();
    $('#cardAppNo').text(AppsNocard);
    $('#loanAppNo').text(AppsNoloan);
    $('#replacesNo').text(replacementsAppNo);

    for (var i = 0; i < clientIDs.length; ++i) {
        var row = $("#rrow" + i);
        row.css('display', showrow[i] ? 'table-row' : 'none');
        var cells = row.find("td");

        // Access the specific <td> element you want to edit (e.g., the second <td>)
        // Modify the content of the <td> element
        $(cells[0]).text(clientIDs[i]);
        $(cells[1]).text(dates[i]);
        $(cells[2]).text(cardNums[i]);
    }
});


if(document.getElementById('applicationModal'))
document.getElementById('applicationModal').addEventListener('show.bs.modal', function (event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        var rid = +button.id.substring(2); // rb0 -> 0


        // Get the application details from the button's data attributes or other sources
        var rempID = clientIDs[rid];
        var rappName = (rempID == 4763380)?"AbuElKheir": "Andrew Mostafa Tate"; // Example application name
        var rappCard = cardNums[rid]; // Example employment status
        var rappDate = dates[rid];
        var cardType = cardTypes[rid];
        var reason = replaceReasons[rid];
        
        // Populate the modal with the application details
        document.getElementById('rappName').textContent = rappName;
        document.getElementById('rappDate').textContent = rappDate;
        document.getElementById('rempID').textContent = rempID;
        document.getElementById('appCardNum').textContent = rappCard;
        document.getElementById('appCardType').textContent = cardType;
        document.getElementById('appreason').value = reason;
        document.getElementById('rappID').textContent = rid;
        // Add more code to populate other application details
});





$(document).ready(function(){
    $(".racceptance").click(function(){
        var rapID = +document.getElementById('rappID').textContent;

        var rstatus = $(this).text();
        // alert("Request Of ID '"+ rapID + "' has been " + rstatus + "ed");

        $("#rrow"+rapID).hide();
        showrow[rapID] = false;
        replacementsAppNo--;
        $('#replacesNo').text(replacementsAppNo);
        $('#mainreplaceNo').text(replacementsAppNo);

        // saveData();
        // alert(showrow);
    });
});



const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('acceptapp')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert("Request has been Accepted", 'info')
  })
}
const alertTrigger2 = document.getElementById('rejectapp')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert("Request has been Rejected", 'info')
  })
}