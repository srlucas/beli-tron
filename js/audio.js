(function() {

	var audios = [];
	$('audio').each(function(index) {
		audios.push(document.getElementById('sound_' + index));
	});

	function loadAllAudio() {
		audios[0].src = 'audios/tagufiao.mp3';
		audios[0].play();
		audios[0].pause();

		audios[1].src = 'audios/cantoDePuelco.mp3';
		audios[1].play();
		audios[1].pause();

		audios[2].src = 'audios/cantoDePuelcoBicho.mp3';
		audios[2].play();
		audios[2].pause();

		audios[3].src = 'audios/elStrogolEsReal.mp3';
		audios[3].play();
		audios[3].pause();

		audios[4].src = 'audios/estupilo.mp3';
		audios[4].play();
		audios[4].pause();

		audios[5].src = 'audios/fuckinMoron.mp3';
		audios[5].play();
		audios[5].pause();

		audios[6].src = 'audios/jodidoToldo.mp3';
		audios[6].play();
		audios[6].pause();

		audios[7].src = 'audios/estupilo2.mp3';
		audios[7].play();
		audios[7].pause();

		audios[8].src = 'audios/unaGilada.mp3';
		audios[8].play();
		audios[8].pause();

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