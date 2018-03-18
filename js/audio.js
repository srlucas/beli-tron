(function() {

	var audios = [];
	$('audio').each(function(index) {
		audios.push(document.getElementById('sound_' + index));
	});

	var loaded = false;
	function loadAllAudio() {
		for(var i = 0; i < audios.length; i++) {
			audios[i].play();
			audios[i].pause();
		}
		loaded = true;
	}

    addEventListener('touchstart', function () {
    	if(!loaded) {
	    	loadAllAudio();
    	}
    });

    $('.beli-button > button').on('click', function() {
    	var index = $(this).attr('audio');
    	if(typeof index == 'undefined') index = Math.floor(Math.random() * 10);
    	console.log('playing audio' + index);
    	audios[index].play();
    });

    (function init() {
    	loadAllAudio();
    })();


})();