$(document).ready(function(){

  $("#adder").on("click", function(){
   // extract values from input fields
   var firstNumber = parseFloat($("#firstNumber").val());
   var secondNumber = parseFloat($("#secondNumber").val());

   // add values from input fields
   $("#result").text(firstNumber + secondNumber);

   // delete input field values after results are displayed
   $("#firstNumber").val("");
   $("#secondNumber").val("");
  });


  $("#subtracter").on("click", function(){

  // extract values from input fields
  var firstNumber = parseFloat($("#firstNumber").val());
  var secondNumber = parseFloat($("#secondNumber").val());

  // subtract values from input fields
  $("#result").text(firstNumber - secondNumber);

  // delete input field values
  $("#firstNumber").val("");
  $("#secondNumber").val("");

  });

  $("#multiplier").on("click", function(){
    // get input fields
    var firstNumber = parseFloat($("#firstNumber").val());
    var secondNumber = parseFloat($("#secondNumber").val());

    // multiply input values
    $("#result").text(firstNumber * secondNumber);

    // delete input values
    $("#firstNumber").val("");
    $("#secondNumber").val("");
  });

  $("#divider").on("click", function(){

    // get input field values
    var firstNumber = parseFloat($("#firstNumber").val());
    var secondNumber = parseFloat($("#secondNumber").val());

    // divide input values
    $("#result").text(firstNumber / secondNumber);

    // delete input values
    $("#firstNumber").val("");
    $("#secondNumber").val("");
  });

});
