$(document).ready(function() {
$('#red')
	.css('background-color', 'red')
	.text('red')
$('#blue')
	.css('background-color', 'blue')
	.text('blue')

$('#red').click(function () {
	$('#red').css('height', '500px').css('width', '500px')
})
$('#blue').click(function () {
	$('#blue').css('height', '500px').css('width', '500px')
})
})
