var myVoice; // new P5.Speech object
var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var listbutton, speakbutton, listenbutton; // button
var myString = 'Hello';
let myResult = '...';
let state = 'sleeping';
let mybody;
let stateDiv;
let myGif;

// references for p5 speech http://ability.nyu.edu/p5.js-speech/
// and this https://github.com/IDMNYU/p5.js-speech/blob/master/examples/03callbacks.html

function speechEnded() {
	console.log('speechEnded: ', speechEnded)
	state = 'sleeping';
	changeBackground();
}

function setup() {
	myVoice = new p5.Speech();
	myVoice.onEnd = speechEnded;
	noCanvas();
	//createElement('body', 'testing this as nothing is working');


	// buttons for starting actions like speak into browser or hear it talk back
	// button to list name of voices in the console
	// listbutton = createButton('List Voices');
	// listbutton.position(80, 100);
	// listbutton.mousePressed(doList);

	speakbutton = select('#speakBtn');
	speakbutton.mousePressed(speakSth);

	createP()
	// this is showing on the screen what is being said
	myRec.onResult = showResult;
	// This was testing what was working or not with audio recording
	// myRec.onError = showError;
	
	listenbutton = select('#listenBtn');
	listenbutton.mousePressed(listenSth);

	mybody = select('#mybody');
	myResult = select('#myResult');
	stateDiv = select('#stateDiv');
	myGif = select('#myGif');

	changeBackground();
}

function changeBackground() {
	if (state === 'sleeping') mybody.style('background', color(255, 51, 0));
	if (state === 'listening') mybody.style('background', 'green');
	if (state === 'speaking') mybody.style('background', 'blue');
	stateDiv.html(state + '...');
	changeGif();
}

function changeGif() {
	myGif.elt.src = './gifs01/' + state + '.gif';
	//myGif.style('scale', 0.5);

}

function listenSth() {
	state = 'listening';
	changeBackground();
	myRec.start();
}

// function showError(error) {
// 	console.log('error: ', error)
// 	console.log('myRec: ', myRec)
// 	createDiv(JSON.stringify(error))
// 	createDiv(JSON.stringify(myRec))
// 	createDiv(`RESULT VALUE${myRec.resultValue}`)
// }

function showResult() {
	if (myRec.resultValue == true) {
		console.log(myRec.resultString);
		myString = myRec.resultString;
		myResult.html(myString);
		state = 'sleeping';
		changeBackground();
	}
}

function draw() {
	// background(white);
	// fill(black);
	// rect(100,100);
	// position(500,200);
}

// This function displays in the console the list of voices that are accessible via p5js 
// The names then can be chosen/called upon to determine output voice
// These voices are also able to be changed accoridng to pitch and speed
// function doList() {
// 	myVoice.listVoices(); 
// }

function speakSth() {
	myVoice.setVoice();
	myVoice.speak(myString);
	state = 'speaking';
	changeBackground();
}
