(function() {

	var playingAudio;

	var onEnd = function() {
		playingAudio = null;
	}

	function play(index) {

		if(playingAudio) playingAudio.pause();

		if (index == undefined) {
			rnd = Math.floor(Math.random() * Math.floor(2));
			index = rnd
		}

		fn = 'audios/audio' + index + '.ogg'
		console.log ("About to load " + fn)
		var audio = new Audio(fn);

		audio.play();

		playingAudio = audio;
		playingAudio.onended = onEnd;

	}

	function pause(audio) {
		audio.pause();
	}

	$('.beli-button > a').on('click', function() {
		console.log('clicking');
		play($(this).find('button').attr('audio'));		
	});

})();