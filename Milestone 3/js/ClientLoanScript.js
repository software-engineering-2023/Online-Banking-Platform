function payInstallement() {
    const selectItem = document.getElementById("exampleFormControlSelect1");
    if(selectItem.selectedIndex === 0) {
        // 
       
        document.getElementById("billAmount").innerHTML = "0";
        document.getElementById("pay-installement").disabled = true;
        const paidInstallementsDetail = document.getElementById("paid-installements");
        paidInstallementsDetail.textContent = Number(paidInstallementsDetail.textContent) + 1;
        const remainingInstallementsDetail = document.getElementById("remaining-installements")
        remainingInstallementsDetail.textContent = Number(remainingInstallementsDetail.textContent) - 1;
         // Get the modal element
         const modal = document.getElementById("success-payment");

         // Initialize the modal using the Bootstrap JavaScript library
         const myModal = new bootstrap.Modal(modal);
     
         // Show the modal using modal.show()
         myModal.show();
    }
    else {
         // Get the modal element
         const modal = document.getElementById("failing-payment");

         // Initialize the modal using the Bootstrap JavaScript library
         const myModal = new bootstrap.Modal(modal);
     
         // Show the modal using modal.show()
         myModal.show();
    }
    
}