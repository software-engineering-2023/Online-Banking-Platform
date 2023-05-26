const announcementArray = ["New Credit Card Rewards Program - Earn More Points with Every Purchase", "Summer Sale - Up to 50% off on Select Items", "Introducing Our New Mobile App - Manage Your Account On-the-Go"];

// Get the container element where the announcement items will be displayed
const container = document.getElementById("announcements-container");

// Loop through the announcement array and create a div element for each item
for (let i = 0; i < announcementArray.length; i++) {
  const announcementItem = document.createElement("div");
  announcementItem.classList.add("announcement-item");

  const announcementWell = document.createElement("div");
  announcementWell.classList.add("announcement-well");

  const announcementTitle = document.createElement("h3");
  announcementTitle.classList.add("announcement-title");
  announcementTitle.textContent = announcementArray[i];

  const announcementLink = document.createElement("a");
  announcementLink.classList.add("announcement-link");
  announcementLink.setAttribute("href", "#");
  announcementLink.textContent = "Check Details";

  const announcementButtons = document.createElement("div");
  announcementButtons.classList.add("announcement-buttons");

  const updateButton = document.createElement("button");
  updateButton.classList.add("btn", "btn-success");
  updateButton.classList.add("updateButton");
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", () => {
    showUpdatePopup(announcementArray[i], i);
  });

 const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    showDeleteAlert(announcementArray[i], i);
  });

  announcementButtons.appendChild(updateButton);
  announcementButtons.appendChild(deleteButton);

  announcementWell.appendChild(announcementTitle);
  announcementWell.appendChild(announcementLink);
  announcementItem.appendChild(announcementWell);
  announcementItem.appendChild(announcementButtons);
  container.appendChild(announcementItem);
}

function showDeleteAlert(announcement, index) {
  new swal({
    title: "Are you sure?",
    text: `Do you want to delete the announcement "${announcement}" ?`,
    icon: "warning",
    buttons: ["Cancel", "Delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      // Remove the announcement from the array
      announcementArray.splice(index, 1);
      // Remove the announcement item from the container
      container.removeChild(container.childNodes[index]);
      toastr.success(`The announcement "${announcement}" has been deleted.`);
    }
  });
}

function showUpdatePopup(announcement, index) {

}




