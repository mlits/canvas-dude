var debug=prompt("Debug draw process?", "false");
var timer=Date.now();
if ((debug) == "true") debugger;
drawHead();
drawBody();
drawLeftHand();
drawRightHand();
drawLeftLeg();
drawRightLeg();
if (debug=="true" && Date.now()-timer<200) alert("Please on debug mode in your browser or make debug slower");
// make legal change and commit via git bash