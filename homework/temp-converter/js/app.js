	document.getElementById('celsius').style.height="40px";
	document.getElementById('celsius').style.fontSize="30pt";
	document.getElementById('fahrenheit').style.height="40px";
	document.getElementById('fahrenheit').style.fontSize="30pt";
	document.getElementById('cc').style.fontSize="40pt";
	document.getElementById('ff').style.fontSize="40pt";
	document.getElementById('equal').style.fontSize="80pt";


	function convert(degree) {
		if (degree == "C") {
        F = document.getElementById("celsius").value * 9 / 5 + 32;
        document.getElementById("fahrenheit").value = Math.round(F);
    } else	{
        C = (document.getElementById("fahrenheit").value -32) * 5 / 9;
        document.getElementById("celsius").value = Math.round(C);
    }
}