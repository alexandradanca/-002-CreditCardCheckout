var weekday=new Array(7);
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
weekday[7]="Sunday";
var now = new Date();
var dateDay = weekday[now.getDay()];
var date = now.toLocaleDateString();
var dateTime = now.toLocaleTimeString();

document.getElementById("day").innerHTML = dateDay;
document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = dateTime;

function onHover(eleId) {
    switch(eleId){
        case crd: document.getElementById('crd').setAttribute("src", "./assets/images/credit-cards-w.png");
        break;
        case transaction: document.getElementById('transaction').setAttribute("src", "./assets/images/transaction-w.png");
        break; 
        case pp: document.getElementById('pp').setAttribute("src", "./assets/images/paypal-w.png");
        break;
        default: 0;
    }
}
  
  function offHover() {
    document.getElementById('crd').setAttribute("src", "./assets/images/credit-cards.png");
    document.getElementById('transaction').setAttribute("src", "./assets/images/transaction.png");
    document.getElementById('pp').setAttribute("src", "./assets/images/paypal.png");
  }

