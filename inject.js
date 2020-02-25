var numberOfdays = 0;
var d = new Date();
var hour = getHour();
if(hour>12){
  var numberOfdays = 3;
}else{
  var numberOfdays = 2;
}
document.getElementById("number_of_days").innerHTML = "You will recive delivery on <strong>" + addBusinessDays(d, numberOfdays) +"<strong>";
function getHour() {
  var d = new Date();
  var n = d.getHours();
  return n;  
}


function addBusinessDays(d,n) {
    d = new Date(d.getTime());
    var day = d.getDay();
    d.setDate(d.getDate() + n + (day === 6 ? 2 : +!day) + (Math.floor((n - 1 + (day % 6 || 1)) / 5) * 2));    
    var myDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    return myDate;
}
