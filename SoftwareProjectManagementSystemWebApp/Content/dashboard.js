

/////////////////////////////////////////////
/////////////////USER CLICK //////////////////////////
// Set the initial click count to 0
let clickCount = 0;
document.addEventListener("click", function () {
    clickCount++;
    chart.data.datasets[0].data[0] = clickCount;
    chart.update();

    document.getElementById("click-count").innerHTML = clickCount;
});
//////////////////////////////////////////////////////
//////////////visit and click ///////////////////
var visits = 0;

function updateVisits() {
    document.getElementById("visit-count").innerHTML = visits;
}
// Function to increase the visit count
function increaseVisits() {
    visits++;
    updateVisits();
}
// Use setInterval to increase the visit and click count every 5 seconds
setInterval(increaseVisits, 5000);

////////////////////////////////////////////////
///////////////progress bar ///////////////////////
var progress1 = 0;
var progress2 = 0;
var bar1 = document.getElementById("bar-1");
var bar2 = document.getElementById("bar-2");
var percentage1 = document.getElementById("percentage-1");
var percentage2 = document.getElementById("percentage-2");

document.addEventListener("click", function () {
    progress1 += 1;
    if (progress1 > 100) {
        progress1 = 100;
    }
    bar1.style.width = progress1 + "%";
    percentage1.innerHTML = progress1 + "%";

    progress2 += 0.2;
    if (progress2 > 100) {
        progress2 = 100;
    }
    bar2.style.width = progress2 + "%";
    percentage2.innerHTML = progress2 + "%";
});

/////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//////////////////////////performance graph///////////////////////////
var ctx = document.getElementById('performance-chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'click',
            backgroundColor: '#60B76C',
            borderColor: '#2B3D1A',
            data: [clickCount, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'visit',
            backgroundColor: '#FFC107',
            borderColor: '#FFA000',
            data: [visits, 5, 15, 10, 30, 20, 25]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var visits = 0;

setInterval(function () {
    visits++;
    chart.data.datasets[1].data[0] = visits;
    chart.update();
}, 5000);

// update the chart with new data
function updateGraph() {
    chart.data.datasets[1].data.push(visits);
    chart.update();
}
setInterval(updateGraph, 5000);

// Update visit and click count on the page
setInterval(function () {
    document.getElementById("visit-count").innerHTML = visits;
    document.getElementById("click-count").innerHTML = clickCount;
}, 5000);

////////////////////////// ///////////calender ////////////////////////////////////
$(document).ready(function () {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Event 1',
                start: '2018-01-01'
            },
            {
                title: 'Event 2',
                start: '2018-01-05',
                end: '2018-01-07'
            }
            // more events here
        ]
    });
});
/////////////////////////////////////////

///////////////clock//////////////////////
function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
    var minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    var secondDegrees = (seconds / 60) * 360;
    var hourHand = document.querySelector('.clock-hand.hour');
    var minuteHand = document.querySelector('.clock-hand.minute');
    var secondHand = document.querySelector('.clock-hand.second');
    var clock = document.querySelector("#clock");
    var time = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + ampm;
    document.getElementById("clock").innerHTML = time;

    hourHand.style.transform = rotate($, { hourDegrees }, deg);
    minuteHand.style.transform = rotate($, { minuteDegrees }, deg);
    secondHand.style.transform = rotate($, { secondDegrees }, deg);
    setTimeout(updateTime, 1000);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}
updateTime();
//////////////////////////////////////////////////////////
///script for search button    /////////////////
function openSearch() {
    var x = document.getElementById("search").value;
    if (x === "dog") {
        window.open("/home.html");
    }
    if (x === "cat") {
        window.open("/practice.html");
    }
}
//////////////////////////////////////////////////  
////////////toggle button/////////////////////////       
function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var topnav = document.getElementById("topnav");
    var navIcon = document.getElementById("navIcon");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
        topnav.style.marginLeft = "0";
        navIcon.classList.remove("fa-times");
        navIcon.classList.add("fa-bars");
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        topnav.style.marginLeft = "250px";
        navIcon.classList.remove("fa-bars");
        navIcon.classList.add("fa-times");
    }
}



