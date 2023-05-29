const announcementArray = [{title:"New Credit Card Rewards Program - Earn More Points with Every Purchase", content: "We're excited to announce the launch of our new Credit Card Rewards Program! With this new program, you'll earn more points with every purchase you make using your credit card. This means you can enjoy more rewards and benefits just by using your card for your everyday purchases. With our new rewards program, you'll earn points on every purchase, and you can redeem those points for a variety of rewards, including cash back, travel rewards, and merchandise. Plus, you can earn bonus points by shopping at select merchants and participating in our special promotions. So, if you're looking to get more out of your credit card, our new rewards program is the perfect way to do it. Apply for our credit card today and start earning more points with every purchase!"},
 {title: "Summer Sale - Up to 50% off on Select Items", content: ""}, {title: "Introducing Our New Mobile App - Manage Your Account On-the-Go", content: ""}];

// Get the container element where the announcement items will be displayed
const container = document.getElementById("announcements-container");

// Get the existing modal element
const updateModal = document.getElementById("updateAnnouncementModal");

const myAlert = Swal.mixin();

const detailsModal = document.getElementById("showAnnouncementModal");

const form = document.querySelector('.needs-validation');   



// Loop through the announcement array and create a div element for each item
announcementArray.forEach((announcement) => {
  const announcementItem = document.createElement("div");
  announcementItem.classList.add("announcement-item");

  const announcementWell = document.createElement("div");
  announcementWell.classList.add("announcement-well");

  const announcementTitle = document.createElement("h3");
  announcementTitle.classList.add("announcement-title");
  announcementTitle.textContent = announcement.title;

  const announcementDetailsButton = document.createElement("button");
  announcementDetailsButton.classList.add("btn", "btn-outline-secondary", "btn-sm");
  announcementDetailsButton.classList.add("checkDetailsButton");
  announcementDetailsButton.textContent = "Check Details";
  announcementDetailsButton.style.marginTop = "10px";
  announcementDetailsButton.setAttribute("data-bs-toggle", "modal");
  announcementDetailsButton.setAttribute("data-bs-target", "#showAnnouncementModal");
  
  announcementDetailsButton.addEventListener("click", () => {
    showDetailsPopup(announcement);
  });
  
  const announcementButtons = document.createElement("div");
  announcementButtons.classList.add("announcement-buttons");

  const updateButton = document.createElement("button");
  updateButton.classList.add("btn", "btn-success");
  updateButton.classList.add("updateButton");
  updateButton.setAttribute("data-bs-toggle", "modal");
  updateButton.setAttribute("data-bs-target", "#updateAnnouncementModal");
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", () => {
    showUpdatePopup(announcement);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.classList.add("deleteButton");
  deleteButton.style.marginRight = "10px";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    showDeleteAlert(announcement);
  });

  updateButton.style.marginRight = "10px";

  announcementButtons.appendChild(updateButton);
  announcementButtons.appendChild(deleteButton);

  announcementWell.appendChild(announcementTitle);
  announcementWell.appendChild(announcementDetailsButton);

  announcementItem.appendChild(announcementWell);
  announcementItem.appendChild(announcementButtons);

  container.appendChild(announcementItem);
});

function showDeleteAlert(announcement) {
  myAlert.fire({
    title: "Are you sure?",
    text: `Do you want to delete the announcement "${announcement.title}" ?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
    confirmButtonColor: "#1f1e1d",
    cancelButtonText: "Cancel",
    dangerMode: true
  }).then((result) => {
    if (result.isConfirmed) {
      // Remove the announcement from the array
      const index = announcementArray.indexOf(announcement);
      announcementArray.splice(index, 1);

      // Remove the announcement item from the container
      container.removeChild(container.childNodes[index]);
      toastr.success("The announcement has been deleted successfully");
    }
  });
}
function refreshButtonsEventListenersWithClass(className, onClickFunction) {
    buttons = document.getElementsByClassName(className);
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => onClickFunction(announcementArray[i]));
    }
}

function refreshButtonsEventListeners() {
    refreshButtonsEventListenersWithClass("updateButton", showUpdatePopup);
    refreshButtonsEventListenersWithClass("deleteButton", showDeleteAlert);
    refreshButtonsEventListenersWithClass("checkDetailsButton", showDetailsPopup);
}
function refreshView() {
    allAnnouncementTitles = document.getElementsByClassName("announcement-title");
    for(let i = 0; i < allAnnouncementTitles.length; i++) {
      allAnnouncementTitles[i].textContent = announcementArray[i].title;
    }
}

function showUpdatePopup(announcement) {
  // Update the input values
  updateModal.querySelector("input").value = announcement.title;
  updateModal.querySelector("textarea").value = announcement.content;

  // Update the submit button
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity()) {
          handleUpdateAnnouncementSubmit(announcement);
      }
  });
}

function showDetailsPopup(announcement) {
    detailsModal.querySelector("p").textContent = announcement.content;
    detailsModal.querySelector("#title-shown").textContent = announcement.title;
}

function handleUpdateAnnouncementSubmit(oldAnnouncement) {
    let index = announcementArray.indexOf(oldAnnouncement);
    let title = updateModal.querySelector("input").value;
    let content = updateModal.querySelector("textarea").value;
    let newAnnouncement = {title, content};
    announcementArray[index] = newAnnouncement;
    refreshView();
    refreshButtonsEventListeners();
}


