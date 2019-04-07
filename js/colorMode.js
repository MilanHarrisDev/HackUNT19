let colorModes = [
  'normal', 'protanopia', 'protanomaly', 
  'deuteranopia', 'deuteranomaly', 'tritanopia', 
  'tritanomaly', 'achromatopsia', 'achromatomaly'];

let currentMode = 0;

$( document ).ready(function() {
  $("#color-mode-button").click(function() {
    currentMode++;
    if(currentMode >= colorModes.length){
      currentMode = 0;
    }

    $(this).text(colorModes[currentMode]);
    $("#video").css("filter", "url('#filter-" + colorModes[currentMode] + "')");
  });
});