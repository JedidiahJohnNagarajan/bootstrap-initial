$(document).ready(function(){

    // Attach Button click for reserve btn 
$("#reserveBtn").click(function(){

    // show Reserve Modal
$('#reservetableModal').modal('show');
  });

    // Attach Button click login btn 
$("#loginBtn").click(function(){

    // show loginModal
$('#loginModal').modal('show');
  });


$('#mycarousel').carousel( { interval: 2000 } );
$("#carouselButton").click(function(){
   if ($("#carouselButton").children("span").hasClass('fa-pause')) {
       $("#mycarousel").carousel('pause');
       $("#carouselButton").children("span").removeClass('fa-pause');
       $("#carouselButton").children("span").addClass('fa-play');
   }
   else if ($("#carouselButton").children("span").hasClass('fa-play')){
       $("#mycarousel").carousel('cycle');
       $("#carouselButton").children("span").removeClass('fa-play');
       $("#carouselButton").children("span").addClass('fa-pause');                    
   }
});

});