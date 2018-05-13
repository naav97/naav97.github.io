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
  var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg'];
  $('html').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
  $(".todo").fadeIn(500);
}
