function payBillFully() {
    document.getElementById("billAmount").innerHTML = "0";
    document.getElementById("payBillFullyButton").disabled = true;
    const paidInstallementsDetail = document.getElementById("paid-installements");
    paidInstallementsDetail.textContent = Number(paidInstallementsDetail.textContent) + 1;
    const remainingInstallementsDetail = document.getElementById("remaining-installements")
    remainingInstallementsDetail.textContent = Number(remainingInstallementsDetail.textContent) - 1;
}