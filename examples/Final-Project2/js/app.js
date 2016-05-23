//document.getElementById("embed").innerHTML="<embed src='play.mp3' autostart=true loop=false volume=100 hidden=true>";
//return true;

//user types text in input area
//user press submit button
//run function to convert letters of text into sound 
//sound from mp3 fire plays

//var a = new Audio('/mp3/a1.mp3');
//var b = new Audio('/mp3/b1.mp3');
//var c = new Audio('/mp3/c1.mp3');

$('#submit').click( function(){
	var characters = $('#sentence').val();
	$('#sentence').val('');
	$('#sounds').plays();

	for(var i=0; i<characters.length; i++){
		var letter = characters[i];
		if (!letter.match(/[a-zA-Z]/i)) {
			continue;
		}
		var folder;
		if (isLowerCase(letter)){
			folder = "mp3";
			}
		else {
			folder = "mp3";
		}
		console.log(letter);{
		function playIt () {
		document.getElementById("#sentence").innerHTML="<audio src='mp3/" + folder +"/"+ letter +".mp3' autostart=true>";
		return true;
		}};
		}
});

$("input").keyup(function(event){
	var characters = $('#sentence').val();
	var lettersOnly = characters.replace(/[^A-Za-z]/g, '');
	$("#sentence").val(lettersOnly);
});

