(function() {

	var playingAudio;

	var onEnd = function() {
		playingAudio = null;
	}

	function play(index) {

		if(playingAudio) playingAudio.pause();

		var audio = new Audio('audios/audio'+ index +'.ogg');
		audio.play();

		playingAudio = audio;
		playingAudio.onended = onEnd;

	}

	function pause(audio) {
		audio.pause();
	}

	$('.beli-button button').on('click', function() {
		play($(this).attr('audio'));		
	});

})();



