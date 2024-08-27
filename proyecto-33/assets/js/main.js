window.addEventListener("DOMContentLoaded", () => {

    let numberAccount = document.querySelector(".header__number");
    let money = document.querySelector(".header__money");
    let containersIco = document.querySelectorAll(".item__ico");
    let titles = document.querySelectorAll(".item__title");
    let dates = document.querySelectorAll(".item__date");
    let bills = document.querySelectorAll(".item__bill");
    let totals = document.querySelectorAll(".item__total");
    let bgLoads = document.querySelectorAll(".bg-load");
    let bgLoadsText = document.querySelectorAll(".bg-load-text");

    function setInfo(){
        numberAccount.innerText = "CU99 4562 6582 9874 6523 8889";
        money.innerText = "u$s5.000";

        containersIco.forEach(ico => {
            ico.innerHTML = `<i class="fa-regular fa-credit-card"></i>`
        })

        titles.forEach(title => {
            title.innerText = "Empresa"
        });

        dates.forEach(date => {
            date.innerText = "20-06/2027"
        });

        bills.forEach(bill => {
            bill.innerText = "u$s-400"
        });

        totals.forEach(total => {
            total.innerText = "u$5000"
        });

        bgLoads.forEach(bgLoad => {
            bgLoad.classList.remove("bg-load"); 
        });

        bgLoadstext.forEach(bgLoadText => {
            bgLoadText.classList.remove("bg-load-text"); 
        });
    }
 
    setTimeout(setInfo, 3000);
    

});