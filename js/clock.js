function startTime()
{
   var today = new Date();
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var curr_day  = today.getDay();
   var d_names = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
   var mo_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   document.getElementById('dia').innerHTML=d_names[curr_day];
   document.getElementById('horaFecha').innerHTML = mo_names[mo-1]+" "+d;
   setTimeout(startTime, 10000000);
}
function main( )
{
    $(".todo").hide( );
    startTime();
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'];
    $('html').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
    $(".todo").fadeIn(500);
    getWeather();
}


function getWeather(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dataservice.accuweather.com/currentconditions/v1/107487?apikey=7CFdFSVuYt8e8Ry2daeRIjBifNHiGGBw");
    xhr.responseType = 'json';

    xhr.onload = function() {
        let temp = xhr.response["0"].Temperature.Metric.Value;
        document.getElementById('wether').innerHTML = temp + ' C';
    }

    xhr.send();
}

function lenguas(){
    document.getElementById("lenguas").scrollIntoView({behavior: "smooth", block: "center"});
}

function torrents(){
    document.getElementById("torrents").scrollIntoView({behavior: "smooth", block: "center"});
}

function software(){
    document.getElementById("software").scrollIntoView({behavior: "smooth", block: "center"});
}

function chans(){
    document.getElementById("chans").scrollIntoView({behavior: "smooth", block: "center"});
}

function laU(){
    document.getElementById("laU").scrollIntoView({behavior: "smooth", block: "center"});
}

function movies(){
    document.getElementById("movies").scrollIntoView({behavior: "smooth", block: "center"});
}

function fileT(){
    document.getElementById("fileT").scrollIntoView({behavior: "smooth", block: "center"});
}

function top1(){
    document.getElementById("top1").scrollIntoView({behavior: "smooth", block: "center"});
}
