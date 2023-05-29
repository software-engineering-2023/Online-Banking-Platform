/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById("myButton").addEventListener("click",  () => {
    // Show the pop-up message
    // Swal.fire({
    // title: "Popup Title",
    // text: "This is a pop-up message!",
    // icon: "success",
    // position: "top-end",
    // confirmButtonText: "OK"
    // });
    toastr.options = {
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      
      toastr.success("Your message has been sent successfully!")});


      
