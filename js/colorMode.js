let colorModes = [
  'normal', 'protanopia', 'protanomaly', 
  'deuteranopia', 'deuteranomaly', 'tritanopia', 
  'tritanomaly', 'achromatopsia', 'achromatomaly'];

let currentMode = 0;

let contrastOn = false;

let contrastFilter = 'contrast(100%)';
let colorFilter = 'url(#filter-normal)';

$( document ).ready(function() {
  $("#color-mode-button").click(function() {
    currentMode++;
    if(currentMode >= colorModes.length){
      currentMode = 0;
    }

    colorFilter = "url('#filter-" + colorModes[currentMode] + "')";

    $(this).text(colorModes[currentMode]);
    $("#video").css("filter", contrastFilter + " " + colorFilter);
  });
});

$( document ).ready(function() {
  $("#contrast-button").click(function() {
    contrastOn = !contrastOn;
    $(this).text(contrastOn?"On":"Off");

    contrastFilter = (contrastOn?"contrast(150%) brightness(150%)":"contrast(100%) brightness(100%)");
    $("#video").css("filter", contrastFilter + " " + colorFilter);
  });
});