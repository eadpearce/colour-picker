const rgbArray = ['rgba(', '', ',', '', ',', '',',1)'];
const hexArray = ['#', 'ff', 'ff', 'ff'];
// R is [1] G is [3] B is [5]
const rgbPos = {
  outputRed: 1,
  outputGreen: 3,
  outputBlue: 5
};
const hexPos = {
  outputRed: 1,
  outputGreen: 2,
  outputBlue: 3
};
const outputRed = 255;
const outputGreen = 255;
const outputBlue = 255;
let $red, $blue, $green, $output, outputColour;

$(start);

function start() {
  $red = $('.red');
  $blue = $('.blue');
  $green = $('.green');
  $output = $('.colour');
  $output.html(hexArray.join(''));
  rgbArray[rgbPos.outputRed] = outputRed;
  rgbArray[rgbPos.outputGreen] = outputGreen;
  rgbArray[rgbPos.outputBlue] = outputBlue;
  outputColour = rgbArray.join('');
  $output.css('background', outputColour);

  // Initialize a new plugin instance for all
  // e.g. $('input[type="range"]') elements.
  $('input[type="range"]').rangeslider();

  $('input[type="range"]').rangeslider({
    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false
  });

  $red.on('input', function(e) {
    getColour(rgbPos.outputRed, e.target.value, hexPos.outputRed);
  });
  $green.on('input', function(e) {
    getColour(rgbPos.outputGreen, e.target.value, hexPos.outputGreen);
  });
  $blue.on('input', function(e) {
    getColour(rgbPos.outputBlue, e.target.value, hexPos.outputBlue);
  });

  function getColour(colourPos, colour, hexPos) {
    rgbArray[colourPos] = colour;
    outputColour = rgbArray.join('');
    $output.css('background', outputColour);
    hexArray[hexPos] = parseInt(colour).toString(16);
    $output.html(hexArray.join(''));
  }

}
