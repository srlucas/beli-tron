(function() {

	var audios = [];
	$('audio').each(function(index) {
		audios.push(document.getElementById('sound_' + index));
	});

	function loadAllAudio() {

		for(var i = 0; i < audios.length; i++) {
			audios[i].src = 'audios/audio' + i + '.mp3';
			audios[i].play();
			audios[i].pause();
		}

	}

    addEventListener('touchstart', function () {
    	console.log('touchstart');
    	loadAllAudio();
    });

    $('.beli-button > a').on('click', function() {
    	var index = $(this).find('button').attr('audio');
    	console.log('playing audio' + index);
    	audios[index].play();
    });

    (function init() {
    	loadAllAudio();
    })();


})();