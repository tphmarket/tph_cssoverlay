var numberOfdays = 0;
var d = new Date();
var hour = getHour();
if(hour>12){
  var numberOfdays = 3;
}else{
  var numberOfdays = 2;
}
document.getElementById("number_of_days").innerHTML = "Delivered by <br> <strong>" + addBusinessDays(d, numberOfdays) +"<strong>";
function getHour() {
  var d = new Date();
  var n = d.getHours();
  return n;  
}


function addBusinessDays(d,n) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    d = new Date(d.getTime());
    var day = d.getDay();
    d.setDate(d.getDate() + n + (day === 6 ? 2 : +!day) + (Math.floor((n - 1 + (day % 6 || 1)) / 5) * 2));    
    var myDate = days[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate();
    return myDate;
}