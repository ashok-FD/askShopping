window.onload = function() {
  document.getElementById("address-content").click();
};

function showInput() {
  document.getElementById("name1").innerHTML = document.getElementById(
    "name"
  ).value;
  document.getElementById("line1").innerHTML = document.getElementById(
    "line_1"
  ).value;
  document.getElementById("line2").innerHTML = document.getElementById(
    "line_2"
  ).value;
  document.getElementById("city1").innerHTML = document.getElementById(
    "city"
  ).value;
  document.getElementById("state1").innerHTML = document.getElementById(
    "state"
  ).value;
  document.getElementById("pincode1").innerHTML = document.getElementById(
    "pincode"
  ).value;
  document.getElementById("locality1").innerHTML = document.getElementById(
    "Locality"
  ).value;
}

function showInput_2() {
  document.getElementById("name2").innerHTML = document.getElementById(
    "name_1"
  ).value;
  document.getElementById("line3").innerHTML = document.getElementById(
    "line_3"
  ).value;
  document.getElementById("line4").innerHTML = document.getElementById(
    "line_4"
  ).value;
  document.getElementById("city2").innerHTML = document.getElementById(
    "city_1"
  ).value;
  document.getElementById("state2").innerHTML = document.getElementById(
    "state_1"
  ).value;
  document.getElementById("pincode2").innerHTML = document.getElementById(
    "pincode_1"
  ).value;
  document.getElementById("locality2").innerHTML = document.getElementById(
    "Locality_1"
  ).value;
  document.getElementById("label_2").innerHTML = document.getElementById(
    "label"
  ).value;
}

var modal = document.getElementById("id01");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal_2 = document.getElementById("id02");
window.onclick = function(event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
};
document
  .getElementById("address-content")
  .addEventListener("click", function() {
    document.getElementById("id01").style.display = "none";
  });
document
  .getElementById("address-content_2")
  .addEventListener("click", function() {
    document.getElementById("id02").style.display = "none";
    document.getElementById("new_address_2").style.display = "block";
  });

document.getElementById("icon").addEventListener("click", function() {
  document.getElementById("new_address").style.display = "none";
});

document.getElementById("link").addEventListener("click", function() {
  $("#details").toggle(1500);
  $("#details_2").toggle(1500);
  var x = $("#link").html();
  if (x == "View Details") {
    $("#link").html("Hide Details");
  } else {
    $("#link").html("View Details");
  }
});

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    $("#filterSideMenu").hide(500);
  } else {
    $("#filterSideMenu").show(1000);
  }
}


