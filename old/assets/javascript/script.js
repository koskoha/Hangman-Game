
var lives = 15;
var score = 0;
var computerGuess;

var artists=["Pearl Jam", "Nirvana", "Soundgarden", "Green Day", "Radiohead", "Red", "Backstreet Boys", "Weezer", "Metallica", "No Doubt", "Bush", "Blind Mellon", "The Cranberries", "Blur"];
var letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guesses = [];

document.onkeyup = function(event){
	computerGuess = createGuess();
	console.log(computerGuess);
	createField(computerGuess);

}


function createGuess(){
	return artists[Math.floor((Math.random() * artists.length))]
}


function createField(word){
	console.log("create field work:" +word);
	/* blank line*/
/*	for (var i = 0; i < 17; i++) {
		var div = document.getElementById('blank-line');
		 div.innerHTML = div.innerHTML + '<div class="blank block"></div>';
	}*/
	/* word line*/
	for (var i = 0; i < word.length; i++) {
		var div = document.getElementById('word-line');
		 div.innerHTML = div.innerHTML + '<div class="block underLetter"></div>';
	}
	/*blank line*/
/*	for (var i = 0; i < 17; i++) {
		var div = document.getElementById('blank-line-two');
		 div.innerHTML = div.innerHTML + '<div class="blank block"></div>';
	}*/
}