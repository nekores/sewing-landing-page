/**
* @author SAJID <sajidxullah@gmail.com>
* @date jan 20, 2016
* @description 
* Hilvanna Website Scripts
**/



$(document).ready(function  () {
    loading();
    init();
    

});




function init(){

  //- MC 
    scrolling_nav();
    vegasBaground_mc();


    back2top();
    popup();
    mixitup();
    // switcher();
    collpasea_button();
    carouse_serve();



}


function carouse_serve(){
  $("#img_carousel_services").owlCarousel({
  itemsCustom :[
    [0,1],
    [600,2],
    [1000,3],
    ],
  // items: 2,
  // itemsTablet: [1215, 3],
  // itemsTabletSmall: [497, 1],
  autoPlay: true,
  responsive: true,
  responsiveRefreshRate:100,
  responsiveBaseWidth: window,
  autoHeight: false,
  pagination : false,
  navigation:true,
  navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

  });
}
function loading(){
      Pace.on("start", function(){
        $(".paceloder").show();
    });

    Pace.on("done", function(){
        $(".paceloder").hide();
    });
}



// function switcher(){

//   c = getCookie('color');

//   if(c != null) {
//     // fileName = c + '.css';
//       $('#switcher-target').prop('href', c);

//   }

//     $('.sw-clr').click(function(){

//       ths = $(this);
//       fileName = 'css/' + ths.data('target') + '.css';
//       $('#switcher-target').prop('href', fileName);
//     setCookie('color', fileName, 15);
//       console.log(getCookie('color'));
//   });
// }


// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;

//     // alert("color-changed");
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1);
//         if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
//         // alert(1);
//     }
//     return null;
// }
// ================================MIXITUP CODED HERE================================================

function mixitup(){
$('#container1').mixItUp({
  animation: {
    // effects: 'translateX',
    enable: true,
    effects: 'fade scale',
    duration: 600,
    easing: 'ease',
    perspectiveDistance: '3000px',
    perspectiveOrigin: '50% 50%',
    queue: true,
    queueLimit: 1,
    animateChangeLayout: false,
    animateResizeContainer: true,
    animateResizeTargets: false,
    staggerSequence: null,
    reverseOut: true,
  }
});

}



// ================================BACK TO TOP CODED HERE================================================
function back2top(){
  // height -> scrollTop > height.
  $(window).scroll(function(){
    scrollTop = $(this).scrollTop();
    height = $(window).height();
    element = $("#backtotop");
    // display 
    if(scrollTop > height) {
    element.fadeIn('slow');
    } else {
    element.fadeOut('slow');
    }
  });

  

  scrollTop = $(window).scrollTop();
  height = $(window).height();
  element = $("#backtotop");

  if(scrollTop > height) {
  element.fadeIn();
  } else {
  element.fadeOut();
  }


  $('#backtotop').click(function(){
  $('html, body').animate({scrollTop: 0}, 800);
  });


}

// ================================POPUP CODED HERE================================================
function popup(){
  $('.popup-gallery').each(function(){
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    // z-index: 40000,
    gallery:{
      enabled: true
    },
    image: {
      titleSrc: function (item){
        return item.el.attr('captions');
      }
    },
  });
});
}




//- MEDIACULTURE BACGROUND VIDEO
function vegasBaground_mc(){
  // $("#slider-video-mc").vegas({
   $("#slider-img-mc").vegas({
    slides: [
      { src: "img/bg/1.jpg"},
      { src: "img/bg/2.jpg"},
      { src: "img/bg/3.jpg"},
    ],
    slide: 2,
    preload: true,
    timer: false,
    overlay: 'frameworks/vegas/overlays/02.png',
    transition: 'random',
  });
  $("#slider-video-mc").vegas({
    slides: [
    // { src: "img/bg/1.jpg"},
    {
      video: {
        src: [
        'video/1.mp4',
        ],
      }
    }
    ],
    slide: 3,
    preload: true,
    timer: true,
    overlay: 'frameworks/vegas/overlays/02.png',
    transition: 'random',
  }); 
  
}

//- ABOUT COLLAPSE BUTTON
function collpasea_button(){
  $('#more').click(function() {
      $('.morepara').slideToggle('slow');
      return false;
    });
    $('#close-up').click(function() {
      $('.morepara').slideUp('fast');
      return false;
    });

//    $('#more1').click(function() {
//       $('.morepara1').slideToggle('slow');
//       return false;
//     });
//     $('#close-up1').click(function() {
//       $('.morepara1').slideUp('fast');
//       return false;
//     });

// // second
//     $('#more2').click(function() {
//       $('.morepara2').slideToggle('slow');
//       return false;
//     });
//     $('#close-up2').click(function() {
//       $('.morepara2').slideUp('fast');
//       return false;
//     });

// // third
// $('#more3').click(function() {
//       $('.morepara3').slideToggle('slow');
//       return false;
//     });
//     $('#close-up3').click(function() {
//       $('.morepara3').slideUp('fast');
//       return false;
//     });

// // Fourth
// $('#more4').click(function() {
//       $('.morepara4').slideToggle('slow');
//       return false;
//     });
//     $('#close-up4').click(function() {
//       $('.morepara4').slideUp('fast');
//       return false;
//     });
}
function scrolling_nav(){
  (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    // $("h1").fitText(
    //     1.2, {
    //         minFontSize: '35px',
    //         maxFontSize: '65px'
    //     }
    // );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
  
}