(function() {

	function play(index) {

		if (index == undefined) {
			rnd = Math.floor(Math.random() * Math.floor(2));
			index = rnd
		}
		fn = 'audios/audio' + index + '.ogg'
		console.log ("About to load " + fn)
		var audio = new Audio(fn);
		audio.play();
	}

	$('.beli-button button').on('click', function() {
		play($(this).attr('audio'));		
	});

})();