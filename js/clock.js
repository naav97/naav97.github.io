function startTime()
{
   var today = new Date();
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var d_names = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
   var curr_day  = today.getDay();
   document.getElementById('dia').innerHTML=d_names[curr_day];
   document.getElementById('horaFecha').innerHTML = d+"/"+mo;
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
