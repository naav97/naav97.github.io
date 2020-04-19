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
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'];
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

function getCorona(){
    var t = new Date();
    var ano = t.getFullYear();
    var mes = t.getMonth() + 1;
    var dia = t.getDate() - 1;
    if ((mes+"").length < 2) {
        mes = '0' + mes;
    }
    if ((dia+"").length < 2) {
        dia = '0' + dia;
    }
    var fe = ano + "-" + mes + "-" + dia;
    var pais = document.getElementById("cont").value;
    var dato = new XMLHttpRequest();
    dato.open("GET", "https://covid-api.com/api/reports?date="+fe+"&q="+pais);
    dato.responseType = 'json';
    dato.onload = function() {
        let poblacion = document.getElementById("pop").value;
        let confirmados = 0;
        let activos = 0;
        let recuperados = 0;
        let muertos = 0;
        var arreglo = dato.response.data;
        var provincia;
        for (provincia in arreglo) {
            confirmados += arreglo[provincia].confirmed;
            activos += arreglo[provincia].active;
            recuperados += arreglo[provincia].recovered;
            muertos  += arreglo[provincia].deaths;
        }
        let porconf = (confirmados * 100)/poblacion;
        let poract = (activos *  100)/confirmados;
        let porrec = (recuperados * 100)/(confirmados - activos);
        let pormu = (muertos * 100)/(confirmados - activos);
        let porconfr = Math.round(porconf * 100000) / 100000;
        let poractr = Math.round(poract * 100000) / 100000;
        let porrecr = Math.round(porrec * 100000) / 100000;
        let pormur = Math.round(pormu * 100000) / 100000;
        document.getElementById('confirmados').innerHTML = 'Confirmados: ' + confirmados + " (" + porconfr + '% de la poblacion)';
        document.getElementById('activos').innerHTML = 'Activos: ' + activos + " (" + poractr + '% de los confirmados)';
        document.getElementById('recuperados').innerHTML = 'Recuperados: ' + recuperados + " (" + porrecr + '%)';
        document.getElementById('muertos').innerHTML = 'Muertes: ' + muertos + " (" + pormur + '%)';
    }
    dato.send();
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

function corona(){
  document.getElementById("corona").scrollIntoView({behavior: "smooth", block: "center"});
}
