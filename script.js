let dateInput;
let button;
const linkEmpty = "https://www.dailytens.com/?ref=1&qdate="

document.addEventListener("DOMContentLoaded", function() {
    dateInput = document.getElementById("datepicker");
    button = document.getElementById("button");

    button.addEventListener("click", function() {
        let dateFull = dateInput.value;
        let date = dateFull.substring(4,dateFull.length);
        let Date = moment(date)
        Date.format('YYYY-MM-DD');
        let dateFormatted = (Date.format('YYYY-MM-DD'));
        let link = linkEmpty + dateFormatted
        console.log(link)
        window.open(link, '_blank')
    });
});