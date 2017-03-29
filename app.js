$(function() {

  const $red = $('.red');
  const $blue = $('.blue');
  const $green = $('.green');
  const $output = $('.colour');
  // R is [1] G is [3] B is [5]
  let colourArray = ['rgba(', '', ',', '', ',', '',',1)'];
  let outputArray = ['#', 'ff', 'ff', 'ff'];
  $output.html(outputArray.join(''));
  let $outputRed = 255;
  let $outputGreen = 255;
  let $outputBlue = 255;
  colourArray[1] = $outputRed;
  colourArray[3] = $outputGreen;
  colourArray[5] = $outputBlue;
  let outputColour = colourArray.join('');
  $output.css('background', outputColour);

  // Initialize a new plugin instance for all
  // e.g. $('input[type="range"]') elements.
  $('input[type="range"]').rangeslider();

  // Destroy all plugin instances created from the
  // e.g. $('input[type="range"]') elements.
  // $('input[type="range"]').rangeslider('destroy');

  // Update all rangeslider instances for all
  // e.g. $('input[type="range"]') elements.
  // Usefull if you changed some attributes e.g. `min` or `max` etc.
  //$('input[type="range"]').rangeslider('update', true);

  $('input[type="range"]').rangeslider({
    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false
  });

  $red.on('input', function(e) {
    $outputRed = e.target.value;
    colourArray[1] = $outputRed;
    // console.log(e.target.value);
    outputColour = colourArray.join('');
    $output.css('background', outputColour);
    outputArray[1] = parseInt($outputRed).toString(16);
    $output.html(outputArray.join(''));
  });
  $green.on('input', function(e) {
    $outputGreen = e.target.value;
    colourArray[3] = $outputGreen;
    // console.log(e.target.value);
    outputColour = colourArray.join('');
    $output.css('background', outputColour);
    outputArray[2] = parseInt($outputGreen).toString(16);
    $output.html(outputArray.join(''));
  });
  $blue.on('input', function(e) {
    $outputBlue = e.target.value;
    colourArray[5] = $outputBlue;
    // console.log(e.target.value);
    outputColour = colourArray.join('');
    $output.css('background', outputColour);
    outputArray[3] = parseInt($outputBlue).toString(16);
    $output.html(outputArray.join(''));
  });

});
