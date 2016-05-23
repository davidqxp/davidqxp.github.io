(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-2 .slide0').hasAttr('src')) { a='src'; } $('.js-2 .slide0').attr(a, (dpi>1) ? ((dpi>2) ? 'images/dsc_0162-1713-7.jpg' : 'images/dsc_0162-1142-7.jpg') : 'images/dsc_0162-571-7.jpg');
var a='data-src'; if($('.js-2 .slide1').hasAttr('src')) { a='src'; } $('.js-2 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/dsc_0271-1713-7.jpg' : 'images/dsc_0271-1142-7.jpg') : 'images/dsc_0271-571-7.jpg');
var a='data-src'; if($('.js-2 .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/dsc_0563-1713-7.jpg' : 'images/dsc_0563-1142-7.jpg') : 'images/dsc_0563-571-7.jpg');};
if(!window.HTMLPictureElement){r();}
initMenu($('#menu-1')[0]);
$('.js-2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: true,arrows: true,infinite: false,autoplay: true,pauseOnHover: true,autoplaySpeed: 2500});
});