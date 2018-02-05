var clickCounter = 0;

$(document).ready(function(){
  console.log('js');
  $("#generateButton").on('click', function(){
console.log('in generateButton on click');
clickCounter++;
append();
swap();
  });//end on click
});//end on ready



function append(){
  var toEmpty = $("#section1");
  toEmpty.empty();

  var toAppend = '<div class="divs">';
toAppend += '<p>' + clickCounter + '</p>';
toAppend += '<button id="swapper">Swap</button>';
toAppend += '<button id="deleter">Delete</button>';
toAppend += '</div>';

$("#section1").append(toAppend);

}//end append function

function swap(){
$("#swapper").on('click', function(){

  $(".divs").css("background-color", "yellow");

});//end swapper on click
}//end swap
