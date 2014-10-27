/*jshint devel:true */

$(document).ready(function(){

	var $navBtn = $('.menu-btn');
	var $navMenu = $('.nav-section ul');

	$navBtn.on('click',function(){
		//window.alert('hello');
		$navMenu.toggleClass('activeMenu');
	});

});