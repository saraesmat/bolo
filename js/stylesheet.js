function show() {
    document.getElementById("more").innerHTML = "We are distinguished from other restaurants by having a special pizza that you will like very much.";
}
if (new Date().getHours() < 18) { docement.getElementById("loving pizza").innerHTML = "Hello!" }
let day;
switch (new Date().getday()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("days").innerHTML = "Today is" + day;