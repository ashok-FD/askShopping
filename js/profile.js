window.onload = function() {
  document.getElementById("btn_disable").click();
  document.getElementById("btn_disable").style.display = "none";
  document.getElementById("cancel").style.display = "none";
  document.getElementById("ok").style.display = "none";
};
$(document).ready(function() {
  //first name
  $("#btn_enable").click(function() {
    $("#fname").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#fname").prop("disabled", true);
  });
  //last name
  $("#btn_enable").click(function() {
    $("#lname").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#lname").prop("disabled", true);
  });
  //email
  $("#btn_enable").click(function() {
    $("#email").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#email").prop("disabled", true);
  });
  //Gender
  $("#btn_enable").click(function() {
    $("#gender").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#gender").prop("disabled", true);
  });
  //contact
  //mobile no
  $("#btn_enable").click(function() {
    $("#number1").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#number1").prop("disabled", true);
  });
  //personal number
  $("#btn_enable").click(function() {
    $("#number2").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#number2").prop("disabled", true);
  });
  //url
  $("#btn_enable").click(function() {
    $("#url").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#url").prop("disabled", true);
  });
  //address
  $("#btn_enable").click(function() {
    $("#address").prop("disabled", false);
  });
  $("#btn_disable").click(function() {
    $("#address").prop("disabled", true);
  });
  $("#btn_enable").click(function() {
    $("button").hide();
    $("#cancel").show();
    $("#ok").show();
  });
  $("#ok").click(function() {
    $("button").hide();
    $(".ask").replaceWith("<h3>------Your profile is updated.------</h3>");
    $("h3").css("color", "green");
    $("#btn_enable").show();
  });
  $("#ok").click(function() {
    $("#btn_disable").click();
  });
});
