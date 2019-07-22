var myVoice = new p5.Speech(); // new P5.Speech object
var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var listbutton, speakbutton, listenbutton; // button
var myString = 'Hello';
let resultDiv;

function setup() {
	noCanvas();
	// buttons for starting actions like speak into browser or hear it talk back
	// button to list name of voices in the console
	// listbutton = createButton('List Voices');
	// listbutton.position(80, 100);
	// listbutton.mousePressed(doList);

	speakbutton = createButton('Click to read the text');
	speakbutton.position(80, 300);
	speakbutton.mousePressed(speakSth);

	myRec.onResult = showResult;
	
	listenbutton = createButton('Click here to start listening!');
	listenbutton.position(80, 200);
	listenbutton.mousePressed(listenSth);

	
}

function listenSth() {
	myRec.start();
}

function showResult() {
	if (myRec.resultValue==true) {
		console.log(myRec.resultString);
		myString = myRec.resultString;
		createDiv(`${myRec.resultString}`);

	}
}

function draw() {

}
// This function displays the list of voices that are accessible via p5js 
// The names then can be chosen/called upon to determine output voice
// function doList() {
// 	myVoice.listVoices(); 
// }

function speakSth() {
	//myVoice.setVoice();
	myVoice.speak(myString);
}