(function() {

	// var playingAudio;

	// var onEnd = function() {
	// 	playingAudio = null;
	// }

	// function play(index) {

	// 	if(playingAudio) playingAudio.pause();

	// 	if (index == undefined) {
	// 		rnd = Math.floor(Math.random() * Math.floor(2));
	// 		index = rnd
	// 	}

	// 	fn = 'audios/audio' + index + '.ogg'
	// 	console.log ("About to load " + fn)


	// 	var audio = new Audio(fn);
	// 	audio.addEventListener('canplaythrough', function() { 
		
	// 		audio.play();

	// 		playingAudio = audio;
	// 		playingAudio.onended = onEnd;

	// 	}, false);


	// }

	// function pause(audio) {
	// 	audio.pause();
	// }

	// $('.beli-button > a').on('click', function() {
	// 	console.log('clicking');
	// 	$(this).find('button').css('color', 'red');
	// 	play($(this).find('button').attr('audio'));		
	// });





	/**
	* Test 2
	*/

	// var audios = {};

	// function init() {
	// 	$(this).find('.btn').css('color', 'red');
	// 	console.log('init');
	//     var sound = new Audio('audios/audio1.ogg');
	//     sound.load();
	//     audios['_1'] = sound;

	// 	document.addEventListener('touchstart', function () {
	// 	    audios['_1'].play();
	// 	});

	// }

	// $('.beli-button > a').on('click', function() {
	// 	audios['_1'].play();
	// });

	// $('#btn_load_sounds').on('click', init);


	/**
	* Test 3
	*/


	var soundHandle = document.getElementById('soundHandle');

	$(document).ready(function() {
	    addEventListener('touchstart', function (e) {
	        soundHandle.src = 'audio.mp3';
	        soundHandle.loop = true;
	        soundHandle.play();
	        soundHandle.pause();
	    });
	});



})();