
function askQuestions () {
var firstName = prompt('What is your first name');
var lastName = prompt('What is your last name');

var fullName = firstName + ' ' + lastName;
console.log(fullName);

var age= prompt('How old are you?');
age= parseInt(age);

if (age >=18) {
	console.log('User us an adult');
} else if (age >=13) {
	console.log('User is a teenager');
} else  {
	console.log('User is a child');
}



if (firstName.toLowerCase() == 'general'  && lastName.toLowerCase() !== 'assembly') {
     console.log ('Greetings General!');
}


var faveColour = prompt('What is your favourite colour?').toLowerCase();
if (faveColour == 'red' ||
    faveColour == 'blue' ||
    faveColour == 'green' ||
    faveColour == 'yellow') {

	$('h1').css('color', faveColour);
}


}


/* When the page is loaded */
$(function() {

	$('img').on('click', askQuestions);

	// Hide all sections
	$('h3').next().hide();

	// When the user clicks an h3
$('h3').on('click', function(){

//Toggle the next element
$(this).next().slideToggle(130, 'swing');

});


});

