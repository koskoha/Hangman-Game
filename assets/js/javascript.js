var words = ['hello', 'bye', 'window', 'open'];

player = {
	lives:5,
	score:0,
	gWord:"",
	usedChar:[],

	checkSpelling:function(key){
		return gWord.includes(key);
	},

	setGWord:function(word){
		gWord = word;
	}
	
}

/*--------------------------------------*/
function start(key){
	if(player.usedChar.includes(key)){
		if (player.checkSpelling(key)) {
			player.score++;
			console.log(score);
		}else{
			console.log("No such character");
			player.lives--;
			console.log(lives);
		}
	}else{
		console.log("used character");
	}
}


document.onkeyup = function(event){

	if (player.gWord === "") {
		player.gWord=getWord();
		console.log("this is the word: "+ player.gWord);

	}

	start(event.key);

}

function getWord(){
	return words[Math.floor((Math.random() * words.length) + 0)];
}