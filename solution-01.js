var debug = confirm("Debug draw process?");
var timer = Date.now();
if ((debug) == true) debugger;
drawHead();
drawBody();
drawLeftHand();
drawRightHand();
drawLeftLeg();
drawRightLeg();
switch (debug) {
  case true:
    {
      document.querySelector('h1').innerHTML = 'Draw people with debug';
      break;
    }
  case false:
    {
      document.querySelector('h1').innerHTML = 'Draw people with out debug';
      break;
    }
}
if (debug == true && Date.now() - timer < 200) alert("Please on debug mode in your browser or make debug slower");
// make legal change and commit via git bash