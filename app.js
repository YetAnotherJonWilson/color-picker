// You will be creating a little 'pick the block' game with HTML, CSS, and jQuery!
//
// 1 On document load,
// 2 append four (or more!) divs on to the DOM with jQuery,
// each colored with a different color. Each div needs to know which color it is.
//
// Prompt the player to pick one of the color blocks you created at random.
//
// If the player clicks on the correct color block, give them a success message.
// If they pick the wrong color, let them know.
//
// When the player picks the correct color block, prompt the player to pick
// another block randomly and let them keep playing.

$('document').ready (function() {

// creates for divs with class "box" and also an additional number class for each box
$('.box-container').append('<div class = "box one"></div>\n' +
                          '<div class = "box two"></div>\n' +
                          '<div class = "box three"></div>\n' +
                          '<div class = "box four"></div>');

// If the user clicks box one, which is red, they alerted that this is wrong and to try again
$('body').on('click', '.one', function() {
  alert('Nope, not RED! Try again!'); });

// If the user clicks box two, which is blue, they alerted that this is wrong and to try again
$('body').on('click', '.two', function() {
  alert('Nope, not BLUE! Try again!'); });

// If the user clicks box three, which is green, they alerted that this is wrong and to try again
$('body').on('click', '.three', function() {
  alert('Nope, not GREEN! Try again!'); });

// If the user clicks box four, which is yellow, they alerted that this is correct
// and they can click again to keep playing
$('body').on('click', '.four', function() {
  alert('Yes! YELLOW! Click again to keep playing . . .'); });

});
