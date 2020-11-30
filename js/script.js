// event saat link di klik
$('.scrol').on('click', function(e){

	// ambil text href
	var tujuan = $(this).attr('href');
	// tangkap elemen
	var elemenTujuan = $(tujuan);

	// pindah scrol
	$('html,body').animate({scrollTop:elemenTujuan.offset().top-50});


	e.preventDefault();


});


// parallax pertama





$(window).scroll(function(){
	var Scrolw = $(this).scrollTop();

	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ Scrolw/4 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ Scrolw/1 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ Scrolw/2 +'%)'
	});
	
	// portfolio
	

});


