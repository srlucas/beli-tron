function play(id) {

	if (id == undefined) {
		rnd = Math.floor(Math.random() * Math.floor(4));
		id = rnd
	}
	fn = 'audios/audio' + id + '.ogg'
	console.log ("About to load " + fn)
	var audio = new Audio(fn);
	audio.play();
}
