/*jshint devel:true */

$(document).ready(function(){

	var $navBtn = $('.menu-btn');
	var $navMenu = $('.nav-section ul');
	var $svgElements = $('.nav-section .svg-container');

	$navBtn.on('click',function(){
		//window.alert('hello');
		$navMenu.toggleClass('activeMenu');
		$svgElements.toggleClass('btn-color-change');
	});

});