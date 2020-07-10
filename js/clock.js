function startTime()
{
    var oneday = 24*60*60*1000;
    var dayzero = new Date(2020,2,20);
   var today = new Date();
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var curr_day  = today.getDay();
   var d_names = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    var mo_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var diasencuarentena = Math.round(Math.abs((dayzero - today)/ oneday));
   document.getElementById('dia').innerHTML=d_names[curr_day];
   document.getElementById('horaFecha').innerHTML = mo_names[mo-1]+" "+d+" | "+diasencuarentena+" DEC";
   setTimeout(startTime, 10000000);
}
function main( )
{
    var images = ['image1.jpg',
                  'image2.jpg',
                  'image3.jpg',
                  'image4.jpg',
                  'image5.jpg',
                  'image6.jpg',
                  'image7.jpg',
                  'image8.jpg',
                  'image9.jpg',
                  'image10.jpg',
                  'image11.jpg',
                  'image12.jpg',
                  'image13.jpg',
                  'image14.jpg',
                  'image15.jpg'
                 ];
    var url = 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')';
    var alll = document.getElementsByTagName("HTML")[0];
    alll.style.backgroundImage = url;
    startTime();
    getWeather();
    let inputt = document.getElementById("cont");
    inputt.addEventListener('keydown', (e) => {
        if(e.key === "Enter"){
            getCorona();
        }
    });
}


function getWeather(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dataservice.accuweather.com/currentconditions/v1/107487?apikey=7CFdFSVuYt8e8Ry2daeRIjBifNHiGGBw");
    xhr.responseType = 'json';

    xhr.onload = function() {
        let temp = xhr.response["0"].Temperature.Metric.Value;
        document.getElementById('wether').innerHTML = temp + 'C';
    }

    xhr.send();
}

function getCorona(){
    document.getElementById("loader").style.display = "block";
    document.getElementById("respuestaC").style.display = "none";
    var poblas = JSON.parse(paises);
    var t = new Date();
    t.setDate(t.getDate() - 1);
    var ano = t.getFullYear();
    var mes = t.getMonth() + 1;
    var dia = t.getDate();
    if ((mes+"").length < 2) {
        mes = '0' + mes;
    }
    if ((dia+"").length < 2) {
        dia = '0' + dia;
    }
    var fe = ano + "-" + mes + "-" + dia;
    var pais = document.getElementById("cont").value;
    if (pais === "uk") {
        pais = "united kingdom";
    }
    var dato = new XMLHttpRequest();
    dato.open("GET", "https://covid-api.com/api/reports?date="+fe+"&region_name="+pais);
    dato.responseType = 'json';
    dato.onload = function() {
        let poblacion = 0;
        var p;
        for (p in poblas) {
            var soni = poblas[p].Name.toUpperCase() === pais.toUpperCase();
            if (soni) {
                poblacion = poblas[p].Population*1000000;
                break;
            }
        }
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
        let poractp = (activos * 100)/poblacion;
        let porconfr = Math.round(porconf * 10000) / 10000;
        let poractr = Math.round(poract * 10000) / 10000;
        let porrecr = Math.round(porrec * 10000) / 10000;
        let pormur = Math.round(pormu * 10000) / 10000;
        let poractpr = Math.round(poractp * 10000) / 10000;
        document.getElementById('confirmados').innerHTML = 'Confirmados: ' + confirmados + " (" + porconfr + '% de la poblacion)';
        document.getElementById('activos').innerHTML = 'Activos: ' + activos + " (" + poractr + '% de los confirmados ' + poractpr + '% de la poblacion)';
        document.getElementById('recuperados').innerHTML = 'Recuperados: ' + recuperados + " (" + porrecr + '%)';
        document.getElementById('muertos').innerHTML = 'Muertes: ' + muertos + " (" + pormur + '%)';
        document.getElementById("loader").style.display = "none";
        document.getElementById("respuestaC").style.display = "block";
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
