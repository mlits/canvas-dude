var debug = prompt("Debug draw process? (true or false)", "false");
var timer = Date.now();
if ((debug) == "true") debugger;
drawHead();
drawBody();
drawLeftHand();
drawRightHand();
drawLeftLeg();
drawRightLeg();
switch (debug) {
<<<<<<< HEAD
  case true:

    document.querySelector('h1').innerHTML = 'Draw people with debug';
    break;
  case false:
    document.querySelector('h1').innerHTML = 'Draw people with out debug';
    break;

=======
  case "true":
    {
      document.querySelector('h1').innerHTML = 'Draw people with debug';
      break;
    }
  case "false":
    {
      document.querySelector('h1').innerHTML = 'Draw people with out debug';
      break;
    }
>>>>>>> parent of 28b7132... change prompt to confirm
}
if (debug == "true" && Date.now() - timer < 200) alert("Please on debug mode in your browser or make debug slower");
// make legal change and commit via git bash