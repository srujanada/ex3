$(document).ready(function() {
  console.log("ready");

  //change background color
  $('body').css('background-color', '#ff6533');
  
  $('section#blocks li').mouseover(function() {
    //change the #mouseover background color
    $(this).css('background-color','#927B51');
  });
  
  $('section#blocks li').mouseout(function() {
    //change the #mouseout background color to original
    $(this).css('background-color','#330c00');
  });
  
  //HIDE ALL initially
  $('#workText').hide();
  $('#restText').hide();
  $('#eatText').hide();
  $('#smileText').hide();
  
  
  //HOVER FUNCTIONS
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
  
  //CLICK FUNCTIONS
  $('#work').click(function() { // first function
  	  console.log("click working");
      $('#workMain p').css('color','black');
    /*},
    function() { // second function
      $('#workMain p').css('color','#ff6533');
    return false;  */
	});

	$('#rest').click(function() { // first function
  	  console.log("click resting");
      $('#restMain p').css('color','black');
    /*},
    function() { // second function
      $('#resMain p').css('color','#ff6533');
    return false;  */
	});
	
	$('#eat').click(function() { // first function
  	  console.log("click eating");
      $('#eatMain p').css('color','black');
    /*},
    function() { // second function
      $('#eatMain p').css('color','#ff6533');
    return false;  */
	});
	
	$('#smile').click(function() { // first function
  	  console.log("click smiling");
      $('#smileMain p').css('color','black');
    /*},
    function() { // second function
      $('#smileMain p').css('color','#ff6533');
    return false;  */
	});
  
});