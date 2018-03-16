(function() {

	function play(index) {
		var audio = new Audio('audios/audio'+ index +'.ogg');
		audio.play();
	}

	$('.beli-button button').on('click', function() {
		play($(this).attr('audio'));		
	});

})();



