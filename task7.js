$(document).ready(function () {
    $('.rev_slider').slick({  
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   dots:true,
    responsive: [
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   }
 ]
 });
});
