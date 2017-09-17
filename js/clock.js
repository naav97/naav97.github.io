function startTime()
{
   var today=new Date();
   var h=today.getHours();
   var m=today.getMinutes();
   var s=today.getSeconds();
   var ts = Math.round((new Date()).getTime() / 1000);
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var y = today.getFullYear();
   var d_names = ["Sunday","Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
   var curr_day  = today.getDay();
   // add a zero in front of numbers<10
   m=checkTime(m);
   s=checkTime(s);
   document.getElementById('dia').innerHTML=d_names[curr_day];
   document.getElementById('horaFecha').innerHTML=h+":"+m+":"+s+" - "+d+"/"+mo+"/"+y;
   t=setTimeout('startTime()',500);
}
function checkTime(i)
{
   if (i<10)
   {
      i="0" + i;
   }
   return i;
}
function main( )
{
  $(".todo").hide( );
  startTime();
  $(".todo").fadeIn(500);
}
