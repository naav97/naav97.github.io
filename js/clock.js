function startTime()
{
   var today = new Date();
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var curr_day  = today.getDay();
   var d_names = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
   var mo_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   document.getElementById('dia').innerHTML=d_names[curr_day];
   document.getElementById('horaFecha').innerHTML = d+" of "+mo_names[mo];
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
