$(document).ready(function(){
	 
	$('a.home').click(function(){
		$('#home').removeClass('none');
		$('#kanji').addClass('none');
		$('#vocab').addClass('none');
		$('#partikel').addClass('none');
	});
	$('a.kanji').click(function(){
		$('#kanji').removeClass('none');
		$('#home').addClass('none');
		$('#vocab').addClass('none');
		$('#partikel').addClass('none');
	});
	$('a.vocab').click(function(){
		$('#vocab').removeClass('none');
		$('#kanji').addClass('none');
		$('#home').addClass('none');
		$('#partikel').addClass('none');
	});
	$('a.partikel').click(function(){
		$('#partikel').removeClass('none');
		$('#kanji').addClass('none');
		$('#home').addClass('none');
		$('#vocab').addClass('none');
	});

	
});