// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'];

function startTime()
{
    var oneday = 24*60*60*100; 
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

const main = () => {
    const url = 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')';
    document.getElementsByTagName("HTML")[0].style.backgroundImage = url;
    //startTime();
    document.getElementById('sc-input').addEventListener('keydown', (e) => {
        if(e.key === 'y') {
            window.location.href = 'https://www.youtube.com/';
        }
    });
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

function fileT(){
    document.getElementById("fileT").scrollIntoView({behavior: "smooth", block: "center"});
}

function top1(){
    document.getElementById("top1").scrollIntoView({behavior: "smooth", block: "center"});
}

// @license-end
