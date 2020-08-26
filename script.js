const roman1 = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const roman2 = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const roman3 = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const roman4 = ['M', 'MM', 'MMM'];
	
function toroman(valNumA) {
	var arabic = valNumA;
	var romanfinal = "";
	arabic = arabic.toString();
	function reverseString(str) {
		return str.split("").reverse().join("");
	}
	var arabicslide = reverseString(arabic);
	var iteration = 1;
	if (arabic === "0") {
		romanfinal = "<h1>Nulla</h1><p>The number zero did not originally have its own Roman numeral, but the word nulla (the Latin word meaning &quot;none&quot;) was used by medieval scholars to represent 0.</p><p>About 725, Bede or one of his colleagues used the letter N, the initial of nulla or of nihil (the Latin word for &quot;nothing&quot;) for 0.</p>";
	} else {
		for (var i = 0; i < arabicslide.length; ++i) {
		if (iteration == 1) {
			if (arabicslide[i] == "0") {}
			else if (arabicslide[i] >= 1 && arabicslide[i] <= 9) {
				romanfinal = (roman1[arabicslide[i] - 1]) + romanfinal;
			}
		}
		if (iteration == 2) {
			if (arabicslide[i] == "0") {}
			else if (arabicslide[i] >= 1 && arabicslide[i] <= 9) {
				romanfinal = (roman2[arabicslide[i] - 1]) + romanfinal;
			}
		}
		if (iteration == 3) {
			if (arabicslide[i] == "0") {}
			else if (arabicslide[i] >= 1 && arabicslide[i] <= 9) {
				romanfinal = (roman3[arabicslide[i] - 1]) + romanfinal
			}
		}
		if (iteration == 4) {
			if (arabicslide[i] == "0") {}
			else if (arabicslide[i] >= 1 && arabicslide[i] <= 3) {
				romanfinal = (roman4[arabicslide[i] - 1]) + romanfinal
			}
			else if (arabicslide[i] >= 4 && arabicslide[i] <= 9) {
				romanfinal = "<h2>Number is too big.</h2><p>During the centuries that Roman numerals remained the standard way of writing numbers throughout Europe, there were various extensions to the system designed to indicate larger numbers, none of which were ever standardised. Ancient Romans tried to avoid big numbers and so do we c:</p><p>To learn more about it - <a href='https://en.wikipedia.org/wiki/Roman_numerals#Large_numbers'>Wiki article.</a></p>"
			}
		}
		if (iteration >= 5) {
			if (arabicslide[i] == "0") {}
			else if (arabicslide[i] >= 1 && arabicslide[i] <= 3) {
				romanfinal = "<h2>Number is too big.</h2><p>During the centuries that Roman numerals remained the standard way of writing numbers throughout Europe, there were various extensions to the system designed to indicate larger numbers, none of which were ever standardised. Ancient Romans tried to avoid big numbers and so do we c:</p><p>To learn more about it - <a href='https://en.wikipedia.org/wiki/Roman_numerals#Large_numbers'>Wiki article.</a></p>"
			}
		}
		iteration += 1
	}}
document.getElementById("romanout").innerHTML=romanfinal;
}

const romanN = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

function toarabic(valNumR){
	var totarray = valNumR.split('');
	var arabicfinal = 0;
	var current;
	var currentV;
	var next;
	var nextV;
	for (var i=0; i < totarray.length; ++i) {
		current = totarray[i]
		currentV = romanN[current]
		next = totarray[i+1]
		nextV = romanN[next]
		
		if (currentV < nextV) {
			arabicfinal -= currentV;
		} else {
			arabicfinal += currentV;
		}
	}
	if (arabicfinal > 3999) {
		document.getElementById("arabicout").innerHTML=arabicfinal + "<p>Number is too big! So that's probably not how any of it works, but have fun with it anyways :P</p>";
	} else {
		document.getElementById("arabicout").innerHTML=arabicfinal;
	}
	
}