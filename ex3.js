$(document).ready(function() {
  console.log("ready");

  //change background color
  $('body').css('background-color', '#ff6533');
  
  $('section#blocks li').mouseover(function() {
    //change the #mouseover background color
    $('section#blocks li').css('background-color','#927B51');
  });
  
  $('section#blocks li').mouseout(function() {
    //change the #mouseout background color to original
    $('section#blocks li').css('background-color','#330c00');
  });
  
  $('#work').hover(function() { // first function

      //turn on the tool tip
      $('#workText').show();}, 
    function() { // second function
      $('#workText').hide();
    });
  
  $('#rest').hover(function() { // first function
      //turn on the tool tip
      $('#restText').show();}, 
    function() { // second function
      $('#restText').hide();
    });
    
  $('#eat').hover(function() { // first function
      //turn on the tool tip
      $('#eatText').show();}, 
    function() { // second function
      $('#eatText').hide();
    });
  
  $('#smile').hover(function() { // first function
      //turn on the tool tip
      $('#smileText').show();}, 
    function() { // second function
      $('#smileText').hide();
    });
  
});