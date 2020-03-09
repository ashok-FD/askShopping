document.addEventListener("keyup", function back(e) {
  if (e.keyCode == 27) window.location.reload();
});
//Drop Down Hover Contents

$(document).ready(function () {
  //Men Hover effect
  $("#men").hover(function () {
    $("#overlay").fadeIn(1000);
    $("#text").fadeIn();
    $("#text1").fadeOut();
    $("#text3").fadeOut();
    $("#text2").fadeOut();
    $("#text4").fadeOut();
  });
  $("#text").hover(
    function () {
      $(this).fadeIn();
    },
    function () {
      $(this).fadeOut();
      $("#overlay").fadeOut();
    }
  );

  //Women Hover effect
  $("#women").hover(function () {
    $("#overlay").fadeIn();
    $("#text1").fadeIn();
    $("#text").fadeOut();
    $("#text3").fadeOut();
    $("#text2").fadeOut();
    $("#text4").fadeOut();
  });

  $("#text1").hover(
    function () {
      $(this).fadeIn();
    },
    function () {
      $(this).fadeOut();
      $("#overlay").fadeOut();
    }
  );

  //Kids Hover effect
  $("#kids").hover(function () {
    $("#overlay").fadeIn();
    $("#text2").fadeIn();
    $("#text1").fadeOut();
    $("#text").fadeOut();
    $("#text3").fadeOut();
    $("#text4").fadeOut();
  });

  $("#text2").hover(
    function () {
      $(this).fadeIn();
    },
    function () {
      $(this).fadeOut();
      $("#overlay").fadeOut();
    }
  );

  //Home Hover effect
  $("#home").hover(function () {
    $("#overlay").fadeIn();
    $("#text3").fadeIn();
    $("#text1").fadeOut();
    $("#text").fadeOut();
    $("#text2").fadeOut();
    $("#text4").fadeOut();
  });

  $("#text3").hover(
    function () {
      $(this).fadeIn();
    },
    function () {
      $(this).fadeOut();
      $("#overlay").fadeOut();
    }
  );

  //Discover Hover effect
  $("#discover").hover(function () {
    $("#overlay").fadeIn();
    $("#text4").fadeIn();
    $("#text3").fadeOut();
    $("#text1").fadeOut();
    $("#text").fadeOut();
    $("#text2").fadeOut();
  });

  $("#text4").hover(
    function () {
      $(this).fadeIn();
    },
    function () {
      $(this).fadeOut();
      $("#overlay").fadeOut();
    }
  );

  //HoverOut function
  //user dropdown

  $(".user").hover(function () {
    $("#profileContent").fadeIn();
  });
  $("#profileContent").hover(
    function () {
      $(this).fadeIn();
    },
    function () {
      $(this).fadeOut();
    }
  );

  //product page
  $(document).ready(function () {
    $("#sareeImage1").click(function () {
      var image = $(this).attr("src");
      $("#sareeBigImage").attr("src", image);
    });
    $("#sareeImage2").click(function () {
      var image = $(this).attr("src");
      $("#sareeBigImage").attr("src", image);
    });

    $("#sareeImage3").click(function () {
      var image = $(this).attr("src");
      $("#sareeBigImage").attr("src", image);
    });

    $("#sareeImage4").click(function () {
      var image = $(this).attr("src");
      $("#sareeBigImage").attr("src", image);
    });
    /*Shirt */
    $("#shirtImage1").click(function () {
      var image = $(this).attr("src");
      $("#shirtBigImage").attr("src", image);
    });
    $("#shirtImage2").click(function () {
      var image = $(this).attr("src");
      $("#shirtBigImage").attr("src", image);
    });

    $("#shirtImage3").click(function () {
      var image = $(this).attr("src");
      $("#shirtBigImage").attr("src", image);
    });

    $("#shirtImage4").click(function () {
      var image = $(this).attr("src");
      $("#shirtBigImage").attr("src", image);
    });
    /*chudi */
    $("#chudiImage1").click(function () {
      var image = $(this).attr("src");
      $("#chudiBigImage").attr("src", image);
    });
    $("#chudiImage2").click(function () {
      var image = $(this).attr("src");
      $("#chudiBigImage").attr("src", image);
    });

    $("#chudiImage3").click(function () {
      var image = $(this).attr("src");
      $("#chudiBigImage").attr("src", image);
    });

    $("#chudiImage4").click(function () {
      var image = $(this).attr("src");
      $("#chudiBigImage").attr("src", image);
    });
    //   watches
    $("#watchImage1").click(function () {
      var image = $(this).attr("src");
      $("#watchBigImage").attr("src", image);
    });
    $("#watchImage2").click(function () {
      var image = $(this).attr("src");
      $("#watchBigImage").attr("src", image);
    });

    $("#watchImage3").click(function () {
      var image = $(this).attr("src");
      $("#watchBigImage").attr("src", image);
    });

    $("#watchImage4").click(function () {
      var image = $(this).attr("src");
      $("#watchBigImage").attr("src", image);
    });
    //shoes
    $("#shoesImage1").click(function () {
      var image = $(this).attr("src");
      $("#shoesBigImage").attr("src", image);
    });
    $("#shoesImage2").click(function () {
      var image = $(this).attr("src");
      $("#shoesBigImage").attr("src", image);
    });

    $("#shoesImage3").click(function () {
      var image = $(this).attr("src");
      $("#shoesBigImage").attr("src", image);
    });

    $("#shoesImage4").click(function () {
      var image = $(this).attr("src");
      $("#shoesBigImage").attr("src", image);
    });
  });

  //shirt

  document
    .getElementById("shirtAddCart1")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#shirtsCart").fadeIn(2000);
    });
  document
    .getElementById("shirtAddCart2")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#shirtsCart").fadeIn(2000);
    });
  document
    .getElementById("shirtAddCart3")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#shirtsCart").fadeIn(2000);
    });
  //saree
  document
    .getElementById("sareeAddCart1")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#sareeCart").fadeIn(2000);
    });
  document
    .getElementById("sareeAddCart2")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#sareeCart").fadeIn(2000);
    });
  document
    .getElementById("sareeAddCart3")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#sareeCart").fadeIn(2000);
    });
  document
    .getElementById("sareeAddCart4")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#sareeCart").fadeIn(2000);
    });
  //chudithar
  document
    .getElementById("chudiAddCart1")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#chudiCart").fadeIn(2000);
    });
  //watch
  document
    .getElementById("watchAddCart1")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#watchCart").fadeIn(2000);
    });
  document
    .getElementById("watchAddCart2")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#watchCart").fadeIn(2000);
    });
  //shoes
  document
    .getElementById("shoesAddCart1")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#shoesCart").fadeIn(2000);
    });
  document
    .getElementById("shoesAddCart2")
    .addEventListener("click", function () {
      document.getElementById("sticky-footer").style.marginBottom = "0px";
      $("#filtersContainer").hide(500);
      $("#shoesCart").fadeIn(2000);
    });

    //shirts
    document.getElementById("shirt").addEventListener("click", function() {
      $("#shirtsCart").hide(500);
      $("#cardSection").fadeIn(2000);
      $("#cartContainer1").show(2000);
    });

    //saree cart
    document
      .getElementById("saree")
      .addEventListener("click", function() {
        $("#sareeCart").hide(500);
        $("#cardSection").fadeIn(2000);
        $("#cartContainer2").show(2000);
      });

    //chudidhar cart
    document.getElementById("chudidharCart").addEventListener("click", function() {
      $("#chudiCart").hide(500);
      $("#cardSection").fadeIn(2000);
      $("#cartContainer3").show(2000);
    });

    //watch cart
    document.getElementById("watch").addEventListener("click", function() {
      $("#watchCart").hide(500);
      $("#cardSection").fadeIn(2000);
      $("#cartContainer4").show(2000);
    });

    //shoes cart
    document.getElementById("Shoes").addEventListener("click", function() {
      $("#shoesCart").hide(500);
      $("#cardSection").fadeIn(2000);
      $("#cartContainer5").show(2000);
    });

  $(document).ready(function () {
    $(".filtersgallery").click(function () {
      document.getElementById("sticky-footer").style.marginTop= "100%";
      $("#carousel").hide();
      $("#gallery").hide();
      $("#Ad_slick_slider").hide();
      $("#filter").fadeIn();
    });
  });
});

function addressSection() {
  $("#cardSection").fadeOut(2000);
  $("#cartContainer1").fadeOut(500);
  $("#cartContainer2").fadeOut(500);
  $("#cartContainer3").fadeOut(500);
  $("#cartContainer4").fadeOut(500);
  $("#cartContainer5").fadeOut(500);
  document.getElementById("address-content").click();
  $("#addressSelection").show(2000);
}
  function placeOrder() {
    alert("Your Order Placed 'Thakyou to your Orders!'");
    $("#addressSelection").hide(500);
     $("#carousel").show();
     $("#gallery").show();
     $("#Ad_slick_slider").show();
  }
  function orderCart(){
    document.getElementById('profileContent').style.display = "none";
    $("#carousel").hide();
    $("#gallery").hide();
    $("#Ad_slick_slider").hide();
    $("#filter").hide();
    $("#cardSection").hide(500);
    $("#cartContainer1").hide(500);
    $("#cartContainer2").hide(500);
    $("#cartContainer3").hide(500);
    $("#cartContainer4").hide(500);
    $("#cartContainer5").hide(500);
    $("#addressSelection").hide(500);
    $("#profilePage").hide(500);
    $("#OrderCart").show(2000);
  }
  function profile(){
    $("#carousel").hide();
    $("#gallery").hide();
    $("#Ad_slick_slider").hide();
    $("#filter").hide();
    $("#cardSection").hide(500);
    $("#cartContainer1").hide(500);
    $("#cartContainer2").hide(500);
    $("#cartContainer3").hide(500);
    $("#cartContainer4").hide(500);
    $("#cartContainer5").hide(500);
    $("#addressSelection").hide(500);
    $("#OrderCart").hide(500);
    $("#profilePage").show(2000);
  }

function show(){
  var x = document.getElementsByClassName("card-content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("btn");
  if (x.innerHTML === "show more") {
    x.innerHTML = "show less" + " " + "&and;";
  } else {
    x.innerHTML = "show more";
  }
}

//Fiters

filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById(" myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
