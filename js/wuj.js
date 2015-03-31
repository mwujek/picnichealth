/*jshint devel:true */

$(document).ready(function(){


// navigation toggle for mobile
var $navBtn = $('.menu-btn');
var $navMenu = $('.nav-section ul');
var $svgElements = $('.nav-section .svg-container');

$navBtn.on('click',function(){
		//window.alert('hello');
		$navMenu.toggleClass('activeMenu');
		$svgElements.toggleClass('btn-color-change');
	});

// slideshow for product features
var slideshowSpeed = 3500,
	$featureElement = $('.product-feat-list');

function changeImage(i){
	if ($('.product-features-section ul li').hasClass('current')){
		$('.product-photo .images').removeClass('show-product-image');
	}
  //show images
  if(i === 1){ $('.one').addClass('show-product-image');}
  if(i === 2){ $('.two').addClass('show-product-image');}
  if(i === 3){ $('.three').addClass('show-product-image');}
  if(i === 4){ $('.four').addClass('show-product-image');}
}
//if ($('div.x').css('height') === 'auto') {
var $productImages = $('.product-photo');

if( $productImages.css('display') === 'inline-block'){ //if the product photo is displayed...
	//console.log('product images are being displayed!');
	var myInterval;
	var image;
	var myFunc = function() {

		var cur = $('.product-features-section ul li.current');
		if(cur.index() === $('product-features-section ul li').length - 1) {
			cur.removeClass('current');
			$('.product-features-section ul li:first').addClass('current');

		} else {
			cur.removeClass('current').next('li').addClass('current');
		}

        // change the image on the left
        image = $('.current').data('image-index');
        changeImage(image);
        //console.log(cur.index());
    };
} // end conditional statement



//Start Interval
myInterval = setInterval(myFunc, slideshowSpeed);



//hover stop
// $( ".images, .product-features-section ul" ).hover(
// 	function() {
// 		clearInterval(myInterval);  // paused slideshow
// 	}, function() {
// 		myInterval = setInterval(myFunc, slideshowSpeed); // restart slideshow
// 	}
// 	);

// user clicks a product feature

$featureElement.on('click',function(){
	var $e = $( this );
	clearInterval(myInterval);  // paused slideshow
	$featureElement.removeClass('current');
	$e.addClass('current');

	var image = $e.data('image-index');
    changeImage(image);

    //restart slideshow after the user's mouse leaves the element that was clicked

    // $e.mouseleave(function() {
    // 	//$('.current').removeClass('current'); //remove the class first...
    // 	myInterval = setInterval(myFunc, slideshowSpeed); // ...then restart slideshow
    	
    // });

});





});