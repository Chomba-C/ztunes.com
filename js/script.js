//controlling showing of mobile navigation by clicking the munus
document.getElementById('menus').addEventListener('click', function() {
	var dropMenu = document.getElementById('drop-navigation');
	dropMenu.style.visibility = 'visible';
},false);
// controlling of hidig the mobile navigation by sliding left
document.getElementById('close').addEventListener('click', function() {
	var dropMenu = document.getElementById('drop-navigation');
	dropMenu.style.visibility = 'hidden';
}, false);



// tooltip
$('.content-display').on('mouseover', function() {
	$('#tooltip').addClass('animated fadeIn');
	$('#tooltip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#tooltip').removeClass('animated fadeIn')
	});
})
// drop navigation revealed
$('#menus').on('click', function() {
	$('#drop-navigation').addClass('animated fadeIn');
	$('#drop-navigation').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#drop-navigation').removeClass('animated fadeIn')
	});
})
// drop navigation
$('#close').on('click', function() {
	$('#drop-navigation').addClass('animated fadeOutLeft');
	$('#drop-navigation').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#drop-navigation').removeClass('animated fadeOutLeft')
	});
})
// bounce signup and showing of overlay
$('.login,#login-or-user-account').on('click', function() {
	var overlay = document.getElementById('overlay');
	overlay.style.visibility = 'visible';
	$('#signup').addClass('animated rubberBand');
	$('#signup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#signup').removeClass('animated rubberBand');
	});
})
// close of verlay and signup
$('#signup-close').on('click', function() {
	var overlay = document.getElementById('overlay');
	overlay.style.visibility = 'hidden';
})
//position of
$('.content-display').hover(function(evt) {
	var tip = document.getElementById('tooltip');
	var myX = evt.offsetX === undefined ? evt.layerX : evt.offsetX;
	var myY = evt.offsetY === undefined ? evt.layerY : evt.offsetY;
	var whichDiv = evt.target.id;
	
	tip.style.left = evt.pageX - myX - 70+ 'px';
	tip.style.top = evt.pageY - myY + 120+ 'px';
	tip.style.visibility = 'visible';

});

